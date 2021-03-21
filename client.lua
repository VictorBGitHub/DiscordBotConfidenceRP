Citizen.CreateThread(function()
	while true do
        -- This is the Application ID (Replace this with you own)
		SetDiscordAppId(822902195334545428)

        -- Here you will have to put the image name for the "large" icon.
		SetDiscordRichPresenceAsset('logo.png')
        
        -- (11-11-2018) New Natives:

        -- Here you can add hover text for the "large" icon.
        SetDiscordRichPresenceAssetText('This is a lage icon with text')
       
        -- Here you will have to put the image name for the "small" icon.
        SetDiscordRichPresenceAssetSmall('logo.png')

        -- Here you can add hover text for the "small" icon.
        SetDiscordRichPresenceAssetSmallText('This is a lsmall icon with text')


        -- (26-02-2021) New Native:

        --[[ 
            Here you can add buttons that will display in your Discord Status,
            First paramater is the button index (0 or 1), second is the title and 
            last is the url (this has to start with "fivem://connect/" or "https://") 
        ]]--
        SetDiscordRichPresenceAction(0, "First Button!", "fivem://connect/188.40.16.78:30686")
        SetDiscordRichPresenceAction(1, "Second Button!", "fivem://connect/188.40.16.78:30686")

        -- It updates every minute just in case.
		Citizen.Wait(60000)
	end
end)