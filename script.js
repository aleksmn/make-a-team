

const avatars = document.querySelectorAll(".card img");

console.log(avatars);

avatars.forEach((a) => {
    const seed = Math.floor(Math.random() * 10e5);
    const styles = ["adventurer", "avataaars", "pixel-art"];
    const bgcolors = ["red", "orange", "blue", "magenta"];

    a.src = `https://avatars.dicebear.com/api/${styles[1]}/${seed}.svg`
    a.style.background = bgcolors[Math.floor(Math.random() * bgcolors.length)];
}); 