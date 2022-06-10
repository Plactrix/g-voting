local display = false

RegisterCommand('vote', function()
    SetDisplay(not display)
end)

-- Functions

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

-- NUI Callbacks

RegisterNUICallback("exit", function(data)
    SetDisplay(false)
end)


RegisterNUICallback("main", function(data)
    SetDisplay(false)
end)


RegisterNUICallback("error", function(data)
    SetDisplay(false)
end)
