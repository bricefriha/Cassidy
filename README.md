# Cassidy

Framework to create Linux and Mac Desktop app.
More on this soon...

## Installing GTK on Debian-based systems
Update the package list by running the command:
```Bash
sudo apt-get update
```
Install the GTK development package by running the command:
```Bash
sudo apt-get install libgtk-3-dev
```
Install the GObject Introspection development package by running the command:
```Bash
sudo apt-get install libgirepository1.0-dev
```
Depending on the application you are building, you may need to install additional development packages. For example, if you need to build an application that uses GTK's Cairo integration, you will need to run the command:
```Bash
sudo apt-get install libcairo2-dev
```
Once the installation is complete, you can test your GTK installation by compiling and running a simple GTK application.
Please note that these instructions are specific to Debian-based systems, if your target system is different, the package names and installation commands might change.

Also, you may want to add information on how to run the project after the installation, and any other dependecies that need to be installed.
