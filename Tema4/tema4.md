# Tema ["Automatizando el despliegue en la nube"](http://jj.github.io/CC/documentos/temas/Automatizando_cloud)


## Ejercicio 1

**Crear una máquina virtual Ubuntu e instalar en ella un servidor nginx para poder acceder mediante web.**

Inicialmente, tras la instalación del CLI de Azure, debemos iniciar sesión con el siguiente comando:
```console
$ azure login
```

Dicho comando nos devuelve un enlace para abrir en el navegador y un código a introducir en dicha página antes de seleccionar la cuenta con que queremos acceder para iniciar sesión.

A continuación se crea una máquina virtual desde la línea de comandos, y para ello se intenta averiguar las imágenes que hay disponibles:
```console
$ azure vm image list
info:    Executing command vm image list
Location:
```

Pero lo primero que nos pide es la localización, por lo que pasamos a enumerarlas:
```console
$ azure location list
....
data:    Location    :  koreasouth
data:    DisplayName :  Korea South
data:    Providers   :  Microsoft.Compute, Microsoft.Network, Microsoft.ResourceHealth, Microsoft.Security...
data:    
data:    Location    :  francecentral
data:    DisplayName :  France Central
data:    Providers   :  Microsoft.Compute, Microsoft.Network, Microsoft.ResourceHealth, Microsoft.Security...
data:    
data:    Location    :  francesouth
data:    DisplayName :  France South
data:    Providers   :  Microsoft.Compute, Microsoft.Network, Microsoft.ResourceHealth, Microsoft.Security...
....
``` 

Como el centro de Francia (`francecentral`) es el que menos latencia en media presenta [[1](https://azurespeedtest.azurewebsites.net/)] será donde se creará la máquina virtual.

En este caso, elegiremos una imagen de Ubuntu proporcionada por la empresa oficial distribuidora, Canonical.
```console
$ azure vm image list
info:    Executing command vm image list
Location:  francecentral
Publisher:  Canonical
....
data:    Canonical  UbuntuServer  18.04-LTS          Linux  18.04.201812031  FranceCentral  Canonical:UbuntuServer:18.04-LTS:18.04.201812031        
data:    Canonical  UbuntuServer  18.04-LTS          Linux  18.04.201812040  FranceCentral  Canonical:UbuntuServer:18.04-LTS:18.04.201812040        
data:    Canonical  UbuntuServer  18.04-LTS          Linux  18.04.201812060  FranceCentral  Canonical:UbuntuServer:18.04-LTS:18.04.201812060        
data:    Canonical  UbuntuServer  18.04-LTS          Linux  18.04.201901140  FranceCentral  Canonical:UbuntuServer:18.04-LTS:18.04.201901140        
data:    Canonical  UbuntuServer  18.10 
....
```

Una imagen de Marketplace de Azure tiene los atributos siguientes [[2](https://docs.microsoft.com/es-es/azure/virtual-machines/windows/cli-ps-findimage)]:

- **Publicador:** organización que ha creado la imagen. _Ejemplos:_ Canonical, MicrosoftWindowsServer
- **Oferta:** nombre de un grupo de imágenes relacionadas creado por un publicador. _Ejemplos:_ Ubuntu Server, WindowsServer
- **SKU:** instancia de una oferta, por ejemplo, una versión principal de una distribución. _Ejemplos:_ 16.04-LTS, 2016-Datacenter
- **Versión:** número de versión de una SKU de imagen.

Para identificar una imagen de Marketplace cuando se utiliza un URN que combina estos valores separados por el carácter de dos puntos: `Publicador:Oferta:Sku:Versión`. En este caso se empleará la imagen de Ubuntu Server 18.04 LTS más reciente, es decir, `Canonical:UbuntuServer:18.04-LTS:18.04.201901140`.

A continuación creamos el grupo de recursos que pertenecerá a la subcripción que tengamos activa en el momento de creación.
```console
$ azure group create r1 francecentral
info:    Executing command group create
+ Getting resource group r1                                                    
+ Creating resource group r1                                                   
info:    Created resource group r1
data:    Id:                  /subscriptions/6212a19a-52fa-4de3-8d12-d0cd11569726/resourceGroups/r1
data:    Name:                r1
data:    Location:            francecentral
data:    Provisioning State:  Succeeded
data:    Tags: null
data:    
info:    group create command OK
``` 

Por defecto, este grupo de recursos pertenecerá a la subcripción que tengamos activa en el momento de crearlo, en caso de que queramos asociarlo a otra deberemos añadir `--subscription <id_subcripción>`.

Y ya estamos en condiciones de crear nuestra MV en Azure con Ubuntu Server 18.04-LTS, llamada `ubuntuT4`, en el grupo de recursos anteriormente creado, `r1` y con un `usuario` con derechos de administrador. Para acceder a la máquina virtual se realiza mediante la clave privada, en este caso, se proporciona la clave pública de esa clave privada añadiendo la opción `--ssh-key-value` y que cuando nos conectemos por SSH podamos acceder a esta MV.
```console
$ az vm create --name ubuntuT4 --image Canonical:UbuntuServer:18.04-LTS:18.04.201901140 --resource-group r1 --admin-username usuario --ssh-key-value ~/.ssh/id_rsa.pub
{
  "fqdns": "",
  "id": "/subscriptions/6212a19a-52fa-4de3-8d12-d0cd11569726/resourceGroups/r1/providers/Microsoft.Compute/virtualMachines/ubuntuT4",
  "location": "francecentral",
  "macAddress": "00-0D-3A-95-6A-5B",
  "powerState": "VM running",
  "privateIpAddress": "10.0.0.4",
  "publicIpAddress": "40.89.153.26",
  "resourceGroup": "r1",
  "zones": ""
}
``` 

En nuestro caso debimos cambiar la subscripción activa con ayuda el comando: `az account set --subscription` [[3](https://docs.microsoft.com/es-es/cli/azure/manage-azure-subscriptions-azure-cli?view=azure-cli-latest)]. 

Podemos observar que uno se devuelve información sobre la máquina virtual creada como, por ejemplo, su IP pública, a través de la cual podemos acceder a ella mediante SSH.

A continuación accedemos mediante SSH para poder instalar en ella un servidor nginx:
```console
$ ssh usuario@40.89.153.26
usuario@ubuntuT4:~$ sudo apt install -y nginx
```

Para poder comprobar que el servidor nginx, que escucha peticiones a través del puerto 80, se debe de activar este:
```console
$ az vm open-port -g r1 -n ubuntuT4 --port 80
```

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema4/images/nginx.png" weight="450">
</p>


## Ejercicio 2

**Crear una instancia de una máquina virtual Debian y provisionarla usando alguna de las aplicaciones vistas en el tema sobre herramientas de aprovisionamiento.**

Inicialmente creamos un nuevo grupo de recursos en el centro de Francia:
```console
$ az group create -l francecentral -n CCGroupFC
{
  "id": "/subscriptions/6212a19a-52fa-4de3-8d12-d0cd11569726/resourceGroups/CCGroupFC",
  "location": "francecentral",
  "managedBy": null,
  "name": "CCGroupFC",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null
} 
```

Buscamos las imágenes Debian disponibles en el centro de Francia:
```console
$ az vm image list --offer ebian --location francecentral --all
[
  .....
  {
    "offer": "Debian",
    "publisher": "credativ",
    "sku": "9",
    "urn": "credativ:Debian:9:9.0.201808270",
    "version": "9.0.201808270"
  },
  {
    "offer": "Debian",
    "publisher": "credativ",
    "sku": "9",
    "urn": "credativ:Debian:9:9.0.201901090",
    "version": "9.0.201901090"
  },
  {
    "offer": "Debian",
    "publisher": "credativ",
    "sku": "9-backports",
    "urn": "credativ:Debian:9-backports:9.0.201710090",
    "version": "9.0.201710090"
  },
  ..... 
]
``` 


Creamos la máquina virtual con la imagen más reciente de Debian 9 proporcionada por Credativ:
```console
$ az vm create --name DebianT4 --image credativ:Debian:9:9.0.201901090 --resource-group CCGroupFC --admin-username usuario --ssh-key-value ~/.ssh/id_rsa.pub
{
  "fqdns": "",
  "id": "/subscriptions/6212a19a-52fa-4de3-8d12-d0cd11569726/resourceGroups/CCGroupFC/providers/Microsoft.Compute/virtualMachines/DebianT4",
  "location": "francecentral",
  "macAddress": "00-0D-3A-3C-1F-9C",
  "powerState": "VM running",
  "privateIpAddress": "10.0.0.4",
  "publicIpAddress": "20.188.39.128",
  "resourceGroup": "CCGroupFC",
  "zones": ""
}
```

Y procedemos a aprovisionar la máquina virtual creada a partir de [nuestro playbook](https://github.com/MarAl15/EjerciciosCC/blob/master/Tema4/provision/receta-debian.yml).

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema4/images/playbook-debian.png" weight="450">
</p>

Finalmente desplegamos nuestra aplicación en la máquina virtual provisionada conectándonos por SSH a esta:

```console
$ ssh usuario@20.188.39.128
usuario@DebianT4:~$ cd ProyectoCC/
usuario@DebianT4:~/ProyectoCC$ sudo npm start
```

Habilitamos el puerto 80 para comprobar que se ha desplegado correctamente nuestra aplicación:
```console
$ az vm open-port -g CCGroupFC -n DebianT4 --port 80
```

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema4/images/verificacion.png" weight="450">
</p>



# Referencias

- https://docs.microsoft.com/es-es/azure/virtual-machines/azure-cli-arm-commands
- https://docs.microsoft.com/es-es/cli/azure/vm?view=azure-cli-latest#az-vm-create
- https://docs.microsoft.com/en-us/cli/azure/vm/image?view=azure-cli-latest
