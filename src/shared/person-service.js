const Person = require("./person");

class PersonService
{
    constructor(validator, dataContext)
    {
        this.validator = validator;
        this.dataContext = dataContext;
    }

    save(person)
    {
        if (this.validator.isValid(person))
        {
            this.dataContext.savePerson(person);
        }
        else
        {
            throw new Error("Person is not valid.");
        }
    }
}

module.exports = PersonService;
