module.exports = {
    "*.{css,js,jsx,ts,tsx,md,json,scss,xml,html}": () => {
        return ["npm run format:fix", "npm run validate"];
    },
};