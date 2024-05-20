<<<<<<< HEAD
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install any of the following dependencies below (preferably npm):

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

## Database Setup

Before initializing the database with Prisma, you need to set up and host a MySQL database. Follow these steps to get started:

### Install XAMPP/WAMP

1. Download and install **XAMPP** from their official websites.
2. Open the control panel and start the **Apache** and **MySQL** services.
3. Access the MySQL database dashboard by clicking on the **Admin** button in the MySQL row.

### Create the Database

1. In the MySQL dashboard, create a new database named **LimousineTransport**.

### Configure the .env File

1. If you choose to use a different database name, update the `DATABASE_URL` variable in your `.env` file accordingly:
   ```plaintext
   mysql://root:@localhost:3306/<your_database_name>
2. Replace <your_database_name> with the name of your database.

### Initialize Database with Prisma
1. Run the following command to create a new migration based on your Prisma schema and apply it to the database:
   ```plaintext
   npx prisma migrate dev
This will initialize your database with the defined schema and create the necessary tables.


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
"# Limousine-Transport-demo"  
"# myrepo" 
=======
# Limousine-Transport-demo
>>>>>>> b99a6a8d568c3a98871ab852312f4b9ee0560095
