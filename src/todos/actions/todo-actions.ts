"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (
  description: string
): Promise<Todo | { message: string }> => {
  try {
    const todo = await prisma.todo.create({
      data: { description },
    });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch {
    return {
      message: "Error creando todo",
    };
  }
};

export const deleteCompleted = async (): Promise<void> => {
  try {
    await prisma.todo.deleteMany({
      where: { complete: true },
    });
    return revalidatePath("/dashboard/server-todos");
  } catch (error) {
    return;
  }
};
