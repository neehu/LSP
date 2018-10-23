export class Message
{
    Content:string;
    Style:string;
    Dismissed:boolean;

    constructor(content:string,style?:string)
{
    this.Content=content
    this.Style=style || 'info';
}
}