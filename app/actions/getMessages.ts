import prisma from "@/libs/prismadb";

const getMessages = async (
    conversationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                sender: true,
                seen: true,
            },
            orderBy: {
                createAt: 'asc' //舊的to新的 => 由小至大
            }
        });

        return messages;
    } catch (err: any) {
        return [];
    };
};

export default getMessages;