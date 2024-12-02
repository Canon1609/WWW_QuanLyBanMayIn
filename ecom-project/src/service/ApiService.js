export const upLoadImg = async (file) => {
    const token = await GetTokenSirv();
    const response = await fetch("https://api.sirv.com/v2/files/upload", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token.accessToken}`
        },
        body: file
    })
    if(response.ok){
        const result = await response.json();
        return result;
    }
}

export const GetTokenSirv = async () => {
    const clientId = "3vdHm5GkmIZ9AKh20LChr1sCnH4"
    const clientSecret = "PUioZSDOQlwsuMcu0xLZFFNDgiLfaB+wzP4o5Ni49n12XvnSjhPpOASbcGPZRtGH0qivFu0qXMMxebBfMuBw0A=="
    const response = await fetch("https://api.sirv.com/v2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            clientId,
            clientSecret
        })
    })
    if (response.ok) {
        const result = await response.json();
        return result.token;
    }
}