
export default function formatName(name) {
    return name.replace(/([A-Z])/g, ' $1').trim(); 
}