# passwrd.

A simple password manager built for me, as my previous one became more and more out of date. If you are looking at 
this, you will need the [server](https://github.com/cgutwin/passwrd-web) too.

## Getting Started

This will get you running in a development environment. If you do want to deploy it, there are instructions below.

### Prerequisites

* Yarn (or npm)
* The server running ([view here](https://github.com/cgutwin/passwrd-server))

### Installing

Install dependencies

```shell
yarn
```

<br/>

Setup your config files for your system, located in /src/config. Rename them to remove `.example` from the filename. A 
finished file should look similar to below (api.json for example).

```json
{
  "endpoint": "https://localhost:5000"
}
```
`router.json` has the base path name for your route. You will want to change this based on your subdirectory.


Also change `homepage` in `package.json` to match your local structure.

<br/>

Start the app
```shell
yarn start
```

## Deployment

Deploying is fairly simple. Make sure your configs and route basepath are correct for your production environment. I 
used Apache for my web server.

Change `homepage` in `package.json` to match your server file structure.

Build the app using yarn build, and copy the files to your preferred location.

Additionally, copy over `/.htaccess` with the files. You need this for the routes to work properly.

If the routes don't work, you will need to relax AllowOverride for the subdirectories on `'/var/www/html/'` in 
`httpd.conf`.
  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
