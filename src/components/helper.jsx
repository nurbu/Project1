const help = (files) => {
    let img = {};
    Object.keys(files).forEach((key) => {
        let filename = key.split('/').pop();
        img[filename] = files[key].default || files[key];
    });
    return img;
};
export default help;