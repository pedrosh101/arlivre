
export interface Section {
    texto: string; 
    img?: string; 
    legenda?: string; 
};

export interface News {
    id: number;
    title: string;
    author?: string;
    subt?: string;
    endtxt?: string;
    sections: Section[];
    miniatureImg: string;
};

export interface ProjectCardProps {
    new: News;
}

export interface AuthorInfo {
    [key: string]: {
      name: string;
      text: string;
      image: string;
    };
}

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    categorylink: string;
    img: string;
    ano: string;
    price: string;
}