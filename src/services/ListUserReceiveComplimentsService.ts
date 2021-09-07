import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
  async execute(user_id: string){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliments = await complimentsRepositories.find({
      where : {
        user_receiver: user_id
      },     
      relations:["userSender","userReceiver","tag"] //muito cuidado com isso, se tiver muitas informaçãoes podera haver problemas.
    });//cuidado quando abre parentes e colcethes na mesma linha.
    return compliments;
  }
}

export {ListUserReceiveComplimentsService}