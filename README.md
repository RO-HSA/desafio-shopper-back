<a name="top"></a>

<h1 align="cemter">Shopper Backend Challenge</h1>

![image](https://github.com/user-attachments/assets/256f5bc1-f6c2-469b-bf9c-a52fb8c89a4f)

> 🔎 A technical test for the company Shopper.

## :page_facing_up: Explanation

The project is a challenge proposed by Shopper.

The project consists of a service that manages individualized reading of water and gas consumption. The service use the Gemini API to extract the water or gas comnsumption value.

## 🚀 Technologies

- [Nest.js](https://nestjs.com)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [PostgreSQL](https://www.postgresql.org)
- [Prisma](https://www.prisma.io/)

## :closed_book: How to use it?

Before starting, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/), [pnpm](https://pnpm.io/installation) installed.

### With Docker

You must have [Docker](https://www.docker.com) installed.

```bash
# Clone this project
$ git clone https://github.com/RO-HSA/desafio-shopper-back

# access
$ cd desafio-shopper-back

# build the docker image and run the container
$ docker-compose up --build

# The server will initialize in the <http://localhost:3000>
```

### Without Docker

In case you don't want to install Docker and just run it directly.

```bash
# Clone this project
$ git clone https://github.com/RO-HSA/desafio-shopper-back

# access
$ cd desafio-shopper-back

# install dependencies
$ pnpm install

# compile and run the project

# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod

# The server will initialize in the <http://localhost:3000>
```

## Endpoints

### POST /upload

- Request (application/json)

```
{
 "image": base64,
 "customer_code": string,
 "measure_datetime": datetime,
 "measure_type": "WATER" or "GAS"
}
```

- Response 200 (application/json)

```
{
 “image_url”: string,
 “measure_value”: integer,
 “measure_uuid”: string
}
```

### PATCH /confirm

- Request (application/json)

```
{
 "measure_uuid": string,
 "confirmed_value": integer
}
```

- Response 200 (application/json)

```
{
 “success”: true
}
```

### GET /{customer_code}/list?measure_type

- Response 200 (application/json)

```
{
 “customer_code”: string,
 “measures”: [
   {
   “measure_uuid”: string,
   “measure_datetime”: datetime,
   “measure_type”: string,
   “has_confirmed”: boolean,
   “image_url”: string
   },
   {
   “measure_uuid”: string,
   “measure_datetime”: datetime,
   “measure_type”: string,
   “has_confirmed”: boolean,
   “image_url”: string
   }
 ]
}
```

## 🤝 Collaborators

Thanks to the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/user-attachments/assets/08761904-4fae-4b12-9a57-9a67c9248ba5" width="160px;"/><br>
        <sub>
          <b>Robert Santos</b>
        </sub>
      </a>
    </all>
  </tr>
</table>

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Go back to top</a>
