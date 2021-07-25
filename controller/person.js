const personService = require('../sevices/person');

class PersonController {
    async createPerson(req, res){
        try {
            const id = await personService.createPerson(req.body);
            res.status(201).json(id);    
        } catch (err) {
            console.error(err);
            res.ststus(500).json("somating went wrong");
        }
    }
}

module.exports = new PersonController();