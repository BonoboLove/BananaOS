const themes = {
    "Moon Light": {primary: "#F4F4F4",secondary: "#E6E6E6",extra: "#ACACAC",main: "#333333",muted: "#666666",accent: "#929292"},
    "Glacier": {primary: "#F4F4F4",secondary: "#E6E6E6",extra: "#ACACAC",main: "#333333",muted: "#666666",accent: "#2563EB"},
    "Strawberry": {primary: "#F4F4F4",secondary: "#E6E6E6",extra: "#ACACAC",main: "#3D0909",muted: "#723D3D",accent: "#F55555"},
    "Milk Chocolate": {primary: "#F4F4F4",secondary: "#E6E6E6",extra: "#ACACAC",main: "#3D2109",muted: "#72533D",accent: "#C0956E"},

    "Starry Night": {primary: "#131313",secondary: "#1A1A1A",extra: "#464646",main: "#FFFFFF",muted: "#B9BABB",accent: "#575757"},
    "Sapphire": {primary: "#111215",secondary: "#17191D",extra: "#1D1F24",main: "#FFFFFF",muted: "#B9BABB",accent: "#506FB2"},
    "Cherry": {primary: "#2F0909",secondary: "#3D0909",extra: "#6D3F3F",main: "#FFFFFF",muted: "#B9BABB",accent: "#D06B6B"},
    "Dark Chocolate": {primary: "#3D2109",secondary: "#432C1B",extra: "#554337",main: "#FFFFFF",muted: "#C9C9CA",accent: "#684329"},
};
function setTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--extra', theme.extra);
    root.style.setProperty('--main', theme.main);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--accent', theme.accent);
    document.body.setAttribute('data-theme', themeName);
}
setTheme('Moon Light');