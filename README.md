# Development

Pasos para levantar la app en desarollo
1. levantar la base de datos
```
docker compose u
```
2. Renombrar el .env.template a .env
3. Remplazar las variables de entorno
4. Ejecturar el comando ```npm install```
5. Ejectuar el comando ```npm run dev```
6. Ejecturar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecturar el SEED [para crear la base de datos local](localhost:3000/api/seed)

# Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage