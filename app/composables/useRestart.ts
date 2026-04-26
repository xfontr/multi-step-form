/**
 * @description Dev purposes only. This is not meant for a real-world app
 */

async function useRestart() {
    localStorage.clear();
    await navigateTo("/");
    window.location.reload();
}

export default useRestart;
