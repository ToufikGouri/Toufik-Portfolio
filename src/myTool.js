const scrollToPage = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

export {
    scrollToPage,
}