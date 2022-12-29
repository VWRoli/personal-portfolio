export interface ProjectType {
	id: number;
	title: string;
	img: string;
	tags: string[];
	codeUrl: string;
	liveUrl: string;
	desc: string[];
	reverse?: boolean;
}
