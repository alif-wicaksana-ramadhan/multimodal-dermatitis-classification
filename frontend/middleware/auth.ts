export default defineNuxtRouteMiddleware(async (to, from) => {
    const { loggedIn } = useUserSession()

    if (!loggedIn.value) {
        return navigateTo('/login')
    }
})