export class Project {
    name: string | undefined;
    description: string | undefined;
    year: string | undefined;
    frameworks: Framework[] | undefined;
    image: string | undefined;
    url?: string | undefined;

    constructor(name: string, description: string, year: string, frameworks: Framework[], image: string, url?: string) {
        this.name = name;
        this.description = description;
        this.year = year;
        this.frameworks = frameworks;
        this.image = image;
        this.url = url;
    }
}

interface Framework {
    name: string;
    icon?: string;
    asset?: string;
}
