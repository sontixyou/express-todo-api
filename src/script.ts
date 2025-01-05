import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // create a new todo
  // const todo = await prisma.todo.create({
  //   data: {
  //     title: 'First Todo',
  //     content: 'first todo content',
  //     completed: false,
  //     created_at: new Date(),
  //     updated_at: new Date(),
  //   },
  // })

  // fetch all todos
  const todos = await prisma.todo.findMany()
  console.log(todos)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
