export default function slugify(name){
    return name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}