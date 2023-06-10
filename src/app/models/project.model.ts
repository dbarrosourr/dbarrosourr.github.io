export class Project {
    name: string | undefined;
    description: string | undefined;
    year: string | undefined;
    frameworks: string[] | undefined;
    image: string | undefined;

    constructor(name: string, description: string, year: string, frameworks: string[], image: string) {
        this.name = name;
        this.description = description;
        this.year = year;
        this.frameworks = frameworks;
        this.image = image;
    }
}