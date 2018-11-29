# Tema ["Provisionamiento en infraestructuras virtuales"](https://jj.github.io/CC/documentos/temas/Provision)


## Ejercicio 2

**Instalar los prerrequisitos para ejecutar alguna aplicación propia (la del proyecto de la asignatura u otra) usando Ansible.**

La realización de este ejercicio se va a realizar en una máquina virtual de Vagrant con Ubuntu Server 14.04 LTS (Trusty Tahr).

### [Instalación Vagrant](https://fortinux.gitbooks.io/humble_tips/content/capitulo_1_usando_aplicaciones_en_linux/tutorial_instalar_vagrant_para_usar_ambientes_virtuales_en_gnulinux.html)

Para poder usar Vagrant inicialmente debemos de instalar VirtualBox o VMWare. En este caso se ha instalado el primero:
```console
mar@mar-SATELLITE-L750:~$ sudo apt update
mar@mar-SATELLITE-L750:~$ sudo apt install virtualbox dkms
```

A continuación instalamos Vagrant mediante línea de comandos:
```console
mar@mar-SATELLITE-L750:~$ sudo apt -y install vagrant
```

El `-y`, como sabemos, es opcional.


Procedemos a instalar  Ubuntu Server 14.04 LTS (Trusty Tahr) haciendo uso de los [_boxes_](https://www.vagrantup.com/docs/boxes.html) de Vagrant: 

```console
mar@mar-SATELLITE-L750:~$ vagrant box add ubuntu/trusty64 https://vagrantcloud.com/ubuntu/boxes/trusty64
/usr/bin/vagrant:57: warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777
/usr/lib/ruby/vendor_ruby/vagrant/pre-rubygems.rb:33: warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777
/usr/lib/ruby/vendor_ruby/bundler/shared_helpers.rb:78: warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777
==> box: Loading metadata for box 'https://vagrantcloud.com/ubuntu/boxes/trusty64'
==> box: Adding box 'ubuntu/trusty64' (v20181103.0.0) for provider: virtualbox
    box: Downloading: https://vagrantcloud.com/ubuntu/boxes/trusty64/versions/20181103.0.0/providers/virtualbox.box
    box: Progress: 1% (Rate: 4390k/s, Estimated time remaining: 0:03:45    box: Progress: 2% (Rate: 5931k/s, Estimated time remaining: 0:01:58    box: Progress: 4% (Rate: 6416k/s, Estimated time remaining: 0:01:33    box: Progress: 6% (Rate: 6761k/s, Estimated time remaining: 0:01:20    box: Progress: 7% (Rate: 6860k/s, Estimated time remaining: 0:01:14    box: Progress: 9% (Rate: 7381k/s, Estimated time remaining: 0:01:10    box: Progress: 11% (Rate: 7398k/s, Estimated time remaining: 0:01:0    box: Progress: 12% (Rate: 7282k/s, Estimated time remaining: 0:01:0    box: Progress: 14% (Rate: 7153k/s, Estimated time remaining: 0:01:0    box: Progress: 15% (Rate: 7020k/s, Estimated time remaining: 0:01:0    box: Progress: 17% (Rate: 7162k/s, Estimated time remaining: 0:00:5    box: Progress: 19% (Rate: 7272k/s, Estimated time remaining: 0:00:5    box: Progress: 21% (Rate: 7441k/s, Estimated time remaining: 0:00:5    box: Progress: 22% (Rate: 7534k/s, Estimated time remaining: 0:00:5    box: Progress: 24% (Rate: 7808k/s, Estimated time remaining: 0:00:4    box: Progress: 26% (Rate: 7886k/s, Estimated time remaining: 0:00:4    box: Progress: 28% (Rate: 7975k/s, Estimated time remaining: 0:00:4    box: Progress: 30% (Rate: 7945k/s, Estimated time remaining: 0:00:4    box: Progress: 32% (Rate: 7927k/s, Estimated time remaining: 0:00:4    box: Progress: 33% (Rate: 7912k/s, Estimated time remaining: 0:00:4    box: Progress: 35% (Rate: 7980k/s, Estimated time remaining: 0:00:4    box: Progress: 37% (Rate: 7850k/s, Estimated time remaining: 0:00:3    box: Progress: 39% (Rate: 7960k/s, Estimated time remaining: 0:00:3    box: Progress: 41% (Rate: 8023k/s, Estimated time remaining: 0:00:3    box: Progress: 43% (Rate: 8112k/s, Estimated time remaining: 0:00:3    box: Progress: 44% (Rate: 7940k/s, Estimated time remaining: 0:00:3    box: Progress: 46% (Rate: 7952k/s, Estimated time remaining: 0:00:3    box: Progress: 48% (Rate: 8065k/s, Estimated time remaining: 0:00:3    box: Progress: 50% (Rate: 7793k/s, Estimated time remaining: 0:00:3    box: Progress: 51% (Rate: 7689k/s, Estimated time remaining: 0:00:2    box: Progress: 53% (Rate: 7597k/s, Estimated time remaining: 0:00:2    box: Progress: 55% (Rate: 7319k/s, Estimated time remaining: 0:00:2    box: Progress: 56% (Rate: 7008k/s, Estimated time remaining: 0:00:2    box: Progress: 58% (Rate: 7380k/s, Estimated time remaining: 0:00:2    box: Progress: 60% (Rate: 7260k/s, Estimated time remaining: 0:00:2    box: Progress: 62% (Rate: 7425k/s, Estimated time remaining: 0:00:2    box: Progress: 63% (Rate: 7808k/s, Estimated time remaining: 0:00:2    box: Progress: 65% (Rate: 7980k/s, Estimated time remaining: 0:00:2    box: Progress: 67% (Rate: 7998k/s, Estimated time remaining: 0:00:1    box: Progress: 69% (Rate: 8128k/s, Estimated time remaining: 0:00:1    box: Progress: 71% (Rate: 8195k/s, Estimated time remaining: 0:00:1    box: Progress: 73% (Rate: 8044k/s, Estimated time remaining: 0:00:1    box: Progress: 74% (Rate: 7563k/s, Estimated time remaining: 0:00:1    box: Progress: 75% (Rate: 6976k/s, Estimated time remaining: 0:00:1    box: Progress: 76% (Rate: 6300k/s, Estimated time remaining: 0:00:1    box: Progress: 77% (Rate: 5632k/s, Estimated time remaining: 0:00:1    box: Progress: 79% (Rate: 5232k/s, Estimated time remaining: 0:00:1    box: Progress: 80% (Rate: 5300k/s, Estimated time remaining: 0:00:1    box: Progress: 81% (Rate: 5462k/s, Estimated time remaining: 0:00:1    box: Progress: 83% (Rate: 5815k/s, Estimated time remaining: 0:00:1    box: Progress: 84% (Rate: 5770k/s, Estimated time remaining: 0:00:0    box: Progress: 85% (Rate: 5696k/s, Estimated time remaining: 0:00:0    box: Progress: 86% (Rate: 5594k/s, Estimated time remaining: 0:00:0    box: Progress: 88% (Rate: 5413k/s, Estimated time remaining: 0:00:0    box: Progress: 89% (Rate: 5294k/s, Estimated time remaining: 0:00:0    box: Progress: 90% (Rate: 5544k/s, Estimated time remaining: 0:00:0    box: Progress: 92% (Rate: 5656k/s, Estimated time remaining: 0:00:0    box: Progress: 93% (Rate: 5836k/s, Estimated time remaining: 0:00:0    box: Progress: 94% (Rate: 5884k/s, Estimated time remaining: 0:00:0    box: Progress: 96% (Rate: 6037k/s, Estimated time remaining: 0:00:0    box: Progress: 97% (Rate: 6154k/s, Estimated time remaining: 0:00:0    box: Progress: 99% (Rate: 6426k/s, Estimated time remaining: --:--:==> box: Successfully added box 'ubuntu/trusty64' (v20181103.0.0) for 'virtualbox'!
```

Podemos modificar el _Vagrantfile_ de la siguiente forma:
```
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
end
```
o directamente ejecutar la siguiente línea de comando que nos autocompleta el fichero ella sola:
```console
r@mar-SATELLITE-L750:~/UGR/CC/vagrant-ubuntu$ vagrant init ubuntu/trusty64
```

Ya podemos inicializar la máquina virtual creada:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/vagrant-ubuntu$ vagrant up
/usr/bin/vagrant:57: warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777
/usr/lib/ruby/vendor_ruby/vagrant/pre-rubygems.rb:33: warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777
/usr/lib/ruby/vendor_ruby/bundler/shared_helpers.rb:78: warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Importing base box 'ubuntu/trusty64'...
==> default: Matching MAC address for NAT networking...
==> default: Checking if box 'ubuntu/trusty64' is up to date...
==> default: Setting the name of the VM: vagrant-ubuntu_default_1543170191003_49315
==> default: Clearing any previously set forwarded ports...
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 22 (guest) => 2222 (host) (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
    default: Warning: Remote connection disconnect. Retrying...
    default: 
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair for better security.
    default: 
    default: Inserting generated public key within guest...
    default: Removing insecure key from the guest if it's present...
    default: Key inserted! Disconnecting and reconnecting using new SSH key...
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
    default: The guest additions on this VM do not match the installed version of
    default: VirtualBox! In most cases this is fine, but in rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please make sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your host and reload your VM.
    default: 
    default: Guest Additions Version: 4.3.36
    default: VirtualBox Version: 5.1
==> default: Mounting shared folders...
    default: /vagrant => /home/mar/UGR/CC/vagrant-ubuntu
```

### Configuración Ansible

Para la configuración de este sistema de gestión remota de configuración se va a realizar siguiendo los pasos de los apuntes de [este tema](http://jj.github.io/CC/documentos/temas/Provision) y además el video de ["Iniciación a Ansible"](https://www.youtube.com/watch?v=gFd9aj78_SM).

Instalamos Ansible en el caso de que no se tuviese instalado previamente:
```console
mar@mar-SATELLITE-L750:~$ pip install paramiko PyYAML jinja2 httplib2 ansible
```

Cabe notar que el resto de utilidades no son necesarias ya que se suelen instalar automáticamente con Ansible. Estas utilidads se tienen que instalar en el _anfitrión_, siendo innecesarias instalarlas en el _invitado_.

A continuación procedemos a configurar Ansible. Como vamos a trabajar con Vagrant que almacena la configuración de las máquinas virtuales que ha creado dentro del propio directorio, en el directorio oculto `.vagrant`, se copia el fichero de `\etc\ansible\ansible.cfg` en el directorio donde vamos a trabajar, realizando las siguiente modificaciones:
```cfg
[dafaults]
host_key_checking = False
inventory = ./ansible_hosts
```

Como podemos observar tiene dos partes claras:

1. Se evita que al conectarnos por `ssh` a la máquina virtual se haga una comprobación del _host_. 

2. Se especifica el nombre del fichero de nodos en los cuales va a trabajar, conocido como _inventario_. En el fichero *ansible_hosts* se va a definir las máquinas con las que vamos a trabajar.

Cada máquina que se añada al control de Ansible se tiene que añadir un fichero, llamado _inventario_, que contiene las diferentes máquinas controladas por el mismo.


En este caso, se ha definido el fichero *ansible_hosts* de la siguiente manera:
```
[vagrantboxes]
trusty ansible_ssh_port=2222 ansible_ssh_private_key_file=.vagrant/machines/default/virtualbox/private_key

[vagrantboxes:vars]
ansible_ssh_host=127.0.0.1
ansible_ssh_user=vagrant
```

Primero se le asigna un nombre a una mñaquina, en este caso `trusty` y se configura una serie de puertos. Por defecto, Vagrant le asigna el puerto 2222.

Con el _host_ le indicamos a qué máquina queremos acceder. En este caso, accedemos a nuestra propia máquina (127.0.0.1) pero desde el puerto 2222.

Inicialmente especificamos que el usuario que vamos a usar es `vagrant`, que es el usuario que define por defecto. Pero para acceder a la máquina virtual necesitamos una clave privada (generada automáticamente por Vagrant). Vagrant sube la clave pública de esa clave privada a la máquina virtual para que directamente, cuando nos conectemos con `vagrant ssh` acceda a esa máquina virtual.

Por último, verificamos que esté todo correcto:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/vagrant-ubuntu$ ansible all -m ping
trustysuty  | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
```

## Ejercicio 3

**Desplegar la aplicación que se haya usado anteriormente con todos los módulos necesarios usando un playbook de Ansible.**

Debido a problemas en la ejecución de la aplicación debido a la versión instalada de Node.js en la máquina virtual, se ha decidido instalar Ubuntu 16.04 LTS (Xenial Xerus), pero nos damos cuenta que no se puede ejecutar Ansible debido a un problema de instalación con Python.

```console
mar@mar-SATELLITE-L750:~/UGR/CC/vagrant-xenial$ ansible all -m ping
xenial | FAILED! => {
    "changed": false, 
    "failed": true, 
    "module_stderr": "", 
    "module_stdout": "bash: /usr/bin/python: No such file or directory\r\n", 
    "msg": "MODULE FAILURE", 
    "parsed": false
}
```

Comprobamos que aunque está instalado `python3`, debemos de tener la carpeta `/usr/bin/python` con la instalación de Python.

```console
vagrant@ubuntu-xenial:~$ python --version
The program 'python' can be found in the following packages:
 * python-minimal
 * python3
Ask your administrator to install one of them
vagrant@ubuntu-xenial:~$ python3 --version
Python 3.5.2
vagrant@ubuntu-xenial:~$ alias python='/usr/bin/python3.5'
vagrant@ubuntu-xenial:~$ python --version
Python 3.5.2
```

En este caso, se ha instalado la versión 2.7.12 mediante línea de comandos en la máquina virtual. Y volvemos a comprobar que se puede acceder a esta desde la _anfitriona_:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/vagrant-xenial$ ansible all -m ping
xenial | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
```

A continuación se procede a desplegar [mi proyecto](https://github.com/MarAl15/ProyectoCC) de Cloud Computing, usando el siguiente playbook donde se especifica que las dependencias que se deben instalar antes de proceder a ejecutarla.

```yaml
---
- hosts: xenial

  vars:
    - directorio: ~/ProyectoCC
  
  tasks: 
    - name: Instala git
      become: yes
      apt: pkg=git state=present
    
    - name: Instala curl 
      become: yes
      apt: pkg=curl state=latest
      
    - name: Agrega PPA Node.js
      become: yes
      shell: curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
      args: 
        warn: no
      
    - name: Instala Node.js
      become: yes
      apt: pkg=nodejs state=latest
    
    - name: Instala forever
      npm: name=forever global=yes state=present
      
    - name: Crea directorio del proyecto
      file: path={{ directorio }} state=directory
      
    - name: Descarga el proyecto del repositorio
      git:
        repo: https://github.com/MarAl15/ProyectoCC.git
        dest: "{{ directorio }}"
        
    - name: Instala dependencias basadas en package.json
      npm:
        path: "{{ directorio }}"
        
    - name: Ejecución de la aplicación
      shell: cd {{directorio }}; npm start
```

Y si todo es correcto, nos aparecerá la siguiente salida:

```console
mar@mar-SATELLITE-L750:~/UGR/CC/vagrant-xenial$ ansible-playbook project.yml 

PLAY ***************************************************************************

TASK [setup] *******************************************************************
ok: [xenial]

TASK [Instala git] *************************************************************
ok: [xenial]

TASK [Instala curl] ************************************************************
changed: [xenial]

TASK [Agrega PPA Node.js] ******************************************************
changed: [xenial]

TASK [Instala Node.js] *********************************************************
changed: [xenial]

TASK [Instala forever] *********************************************************
ok: [xenial]

TASK [Crea directorio del proyecto] ********************************************
changed: [xenial]

TASK [Descarga el proyecto del repositorio] ************************************
changed: [xenial]

TASK [Instala dependencias basadas en package.json] ****************************
changed: [xenial]

TASK [Ejecución de la aplicación] **********************************************
changed: [xenial]

PLAY RECAP *********************************************************************
xenial                     : ok=10   changed=7    unreachable=0    failed=0 
```

Por último, comprobamos que realmente se ha desplegado la aplicación en la máquina virtual:
```console
vagrant@ubuntu-xenial:~$ curl -X GET http://localhost:5000/
{"status":"OK","ejemplo":{"ruta":"/Tareas","valor":{"Version":"2.0.0","Tareas":[]}}}
```




