export class Project {
    name: string | undefined;
    description: string | undefined;
    year: string | undefined;
    frameworks: Framework[] | undefined;
    image: string | undefined;

    constructor(name: string, description: string, year: string, frameworks: Framework[], image: string) {
        this.name = name;
        this.description = description;
        this.year = year;
        this.frameworks = frameworks;
        this.image = image;
    }
}

interface Framework {
    name: string;
    icon?: string;
    asset?: string;
}
