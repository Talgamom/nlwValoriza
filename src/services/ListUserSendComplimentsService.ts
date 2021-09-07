import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliments = await complimentsRepositories.find({
      where : {
        user_sender: user_id
      },      
      relations:["userSender","userReceiver","tag"] //muito cuidado com isso, se tiver muitas informaçãoes podera haver problemas.
    });//cuidado quando abre parentes e colcethes na mesma linha.
    return compliments;
  }
}

export {ListUserSendComplimentsService}

//1 hora de video.