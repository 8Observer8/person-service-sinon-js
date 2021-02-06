const sinon = require("sinon");
const assert = require("assert");
const Person = require("../../src/shared/person");
const PersonService = require("../../src/shared/person-service");
const Validator = require("../../src/shared/validator");
const DataContext = require("../../src/shared/data-context");

beforeEach(() =>
{

});

it("the method 'save' is called if person is valid", () =>
{
    const person = new Person(1, "Ivan");
    const validator = new Validator();
    const func = sinon.stub();
    func.withArgs(person).returns(true);
    validator.isValid = func;

    // const dataContext = { savePerson(person) { } };
    // const dataContext = new DataContext();
    // const mock = sinon.mock(dataContext);
    // const personService = new PersonService(validator, mock);

    const spy = sinon.spy();
    const dataContext = new DataContext();
    dataContext.savePerson = spy;
    const personService = new PersonService(validator, dataContext);

    // mock.expects("savePerson").once();
    // dataContext.savePerson(person);
    // dataContext.savePerson(person);
    personService.save(person);
    // mock.verify();
    assert(spy.calledOnce);
});
