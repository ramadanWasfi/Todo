export function Common(name, description) {
    const Name = name;
    const Description = description;

    const setName = (newName) => Name = newName;
    const getName = () => Name;

    const setDescription = (newDescription) => Description = newDescription;
    const getDescription = () => Description;

    return {setName, getName, setDescription, getDescription};
}