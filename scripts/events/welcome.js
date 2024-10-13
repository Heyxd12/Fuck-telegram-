module.exports = {
    onChat: async ({ bot, msg }) => {
        if (msg.new_chat_members) {
            const newMembers = msg.new_chat_members.map(member => member.first_name).join(', ');
            const chatName = msg.chat.title || 'this group';
            const welcomeMessage = `Welcome Hello Iam Gojo Chat Bot My Owner MaHi Ahmed🌸I hope You enjoy ${newMembers} to ${chatName}!`;

            bot.sendMessage(msg.chat.id, welcomeMessage);
        }
    }
};
