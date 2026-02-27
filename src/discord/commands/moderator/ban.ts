import { createCommand } from "#base";
import { ApplicationCommandType } from "discord.js";

createCommand({
    name: "ban",
    description: "ban command",
    type: ApplicationCommandType.ChatInput,
    async run(interaction){
        
    }
});