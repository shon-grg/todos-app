# Todos Application

## Preview

<img src="image/Screenshot 2024-04-22 164636.png" />
<img src="image/Screenshot 2024-04-22 164822.png" />

Built using technologies:node.js,express.js,mongoDB mongoose,React.js

<!-- ahead of main parts -->

# Installation

- `Backend` - Node.js, Express.js & MongoDB database
- cd backend-`npm start`
- `Frontend` - React.js, & css,styled Component
- cd frondend-`npm run dev`

<!-- environment-->

# Configuration

- PORT=3000
- DATABASE=mongodb://localhost:27017/todos

- JWT_SECRET=supper-powerfull-secret-ultrastrong
- JWT_EXPIRES_IN=90d

# Run the App

Go to `backend` and `frontend` directory and start the server

```
cd backend
npm start
```

```
cd frontend
npm run dev
```

# API Routes

Common Routes

- app.use('/api/v1/todos', todoRoutes);
- app.use('/api/v1/users', userRoutes);
