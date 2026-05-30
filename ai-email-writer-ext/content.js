// console.log("AI Email Writer Extension - Content Script Loaded");

// function createAIButton(){
//     const button = document.createElement('div');
//     button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3';
//     button.style.marginRight = '8px';
//     button.innerHTML = 'AI Reply';
//     button.setAttribute('role','button');
//     button.setAttribute('data-tooltip','Generate AI Reply');
//     return button;
// }

// function getEmailContent(){
//     const selectors = [
//         '.h7',
//         '.a3s.aiL',
//         '.gmail_quote',
//         '[role="presentation"]'
//     ];
//     for (const selector in selectors) {
//         const content = document.querySelector(selector);
//         if(content){
//             return content.innerText.trim();
//         }
//         return '';
//     }
// }

// function findComposeToolbar(){
//     const selectors = [
//         '.aDh',
//         '.btC',
//         '[role="toolBar"]',
//         '.gU.Up'
//     ];
//     for (const selector in selectors) {
//         const toolBar = document.querySelector(selector);
//         if(toolBar){
//             return toolBar;
//         }
//         return null;
//     }
// }

// function injectButton(){
//     const existingButton = document.querySelector('.ai-reply-button');
//     if(existingButton) existingButton.remove();
//     const toolBar = findComposeToolbar();
//     if(!toolBar){
//         console.log("Toolbar Not Found");
//         return;
//     }
//     console.log("Toolbar Found");
//     const button = createAIButton();
//     button.classList.add('ai-reply-button');
//     button.addEventListener('click', async ()=>{
//         try{
//             button.innerHTML='Generating....';
//             button.disabled = true;

//             const emailContent = getEmailContent();
//             const response = await fetch('http://localhost:8080/api/email/generate',{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type' : 'application/json'
//                 },
//                 body :JSON.stringify({
//                         emailContent : emailContent,
//                         toneOfReply : "Professional"
//                 })
//             });

//             if(!response.ok){
//                 throw new Error('API Request Failed');
//             }

//             const generatedReply = await response.text();
//             const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

//             if(composeBox){
//                 composeBox.focus();
//                 document.execCommand('insertText',false,generatedReply);
//             }else{
//                 console.error('Compose Box Not Found');
//             }
//         }
//         catch(error){
//             console.error(error);
//             alert('Fail To Generate The Reply');
//         }
//         finally{
//             button.innerHTML='AI Reply';
//             button.disabled = false;
//         }
//     });

//     toolBar.insertBefore(button, toolBar.firstChild);
// }

// //Mutation means the list of changes occured at browser
// const observer = new MutationObserver((mutations)=>{
//     for(const mutation of mutations){
//         const addedNodes = Array.from(mutation.addedNodes);
//         const hasComposedElements = addedNodes.some(node =>
//             node.nodeType === Node.ELEMENT_NODE &&
//             (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
//         );

//         if(hasComposedElements){
//             console.log("Compose Window Detected");
//             setTimeout(injectButton, 500);
//         }
//     }
// });

// observer.observe(document.body, {
//     childList : true,
//     subtree : true
// })


// console.log("AI Email Writer Extension - Content Script Loaded");

// function createAIButton(){
//     const button = document.createElement('button');

//     button.innerText = 'AI Reply';

//     button.style.marginLeft = '10px';
//     button.style.padding = '10px 16px';
//     button.style.backgroundColor = '#1a73e8';
//     button.style.color = 'white';
//     button.style.border = 'none';
//     button.style.borderRadius = '18px';
//     button.style.cursor = 'pointer';

//     return button;
// }

// function getEmailContent(){
//     const selectors = [
//         '.h7',
//         '.a3s.aiL',
//         '.gmail_quote',
//         '[role="presentation"]'
//     ];

//     for (const selector of selectors) {
//         const content = document.querySelector(selector);

//         if(content){
//             return content.innerText.trim();
//         }
//     }

//     return '';
// }

// function findComposeToolbar(){
//     const selectors = [
//         '.aDh',
//         '.btC',
//         '[role="toolbar"]',
//         '.gU.Up'
//     ];

//     for (const selector of selectors) {
//         const toolBar = document.querySelector(selector);

//         if(toolBar){
//             return toolBar;
//         }
//     }

//     return null;
// }

// function injectButton(){
//     const existingButton = document.querySelector('.ai-reply-button');
//     if(existingButton) existingButton.remove();
//     const toolBar = findComposeToolbar();
//     if(!toolBar){
//         console.log("Toolbar Not Found");
//         return;
//     }
//     console.log("Toolbar Found");
//     const button = createAIButton();
//     button.classList.add('ai-reply-button');
//     button.addEventListener('click', async ()=>{
//         try{
//             button.innerHTML='Generating....';
//             button.disabled = true;

//             const emailContent = getEmailContent();
//             const response = await fetch('http://localhost:8080/api/email/generate',{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type' : 'application/json'
//                 },
//                 body :JSON.stringify({
//                         emailContent : emailContent,
//                         toneOfReply : "Professional"
//                 })
//             });

//             if(!response.ok){
//                 throw new Error('API Request Failed');
//             }

//             const generatedReply = await response.text();
//             const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

//             if(composeBox){
//                 composeBox.focus();
//                 document.execCommand('insertText',false,generatedReply);
//             }else{
//                 console.error('Compose Box Not Found');
//             }
//         }
//         catch(error){
//             console.error(error);
//             alert('Fail To Generate The Reply');
//         }
//         finally{
//             button.innerHTML='AI Reply';
//             button.disabled = false;
//         }
//     });

//     toolBar.appendChild(button);
// }

// //Mutation means the list of changes occured at browser
// const observer = new MutationObserver((mutations)=>{
//     for(const mutation of mutations){
//         const addedNodes = Array.from(mutation.addedNodes);
//         const hasComposedElements = addedNodes.some(node =>
//             node.nodeType === Node.ELEMENT_NODE &&
//             (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
//         );

//         if(hasComposedElements){
//             console.log("Compose Window Detected");
//             setTimeout(injectButton, 500);
//         }
//     }
// });

// observer.observe(document.body, {
//     childList : true,
//     subtree : true
// })

console.log("AI Email Writer Extension - Content Script Loaded");

function createAIButton(){
    const button = document.createElement('button');
    button.innerText = 'AI Reply';
    button.style.marginLeft = '10px';
    button.style.padding = '10px 16px';
    button.style.backgroundColor = '#1a73e8';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '18px';
    button.style.cursor = 'pointer';
    return button;
}

function getEmailContent(){
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role="presentation"]'
    ];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if(content){
            return content.innerText.trim();
        }
    }
    return '';
}

function findComposeToolbar(){
    const selectors = [
        '.aDh',
        '.btC',
        '[role="toolbar"]',
        '.gU.Up'
    ];
    for (const selector of selectors) {
        const toolBar = document.querySelector(selector);
        if(toolBar){
            return toolBar;
        }
    }
    return null;
}

function injectButton(){
    const existingButton = document.querySelector('.ai-reply-button');
    if(existingButton) existingButton.remove();

    const toolBar = findComposeToolbar();
    if(!toolBar){
        console.log("Toolbar Not Found");
        return;
    }
    console.log("Toolbar Found");

    const button = createAIButton();
    button.classList.add('ai-reply-button');

    button.addEventListener('click', async ()=>{
        try{
            button.innerHTML = 'Generating....';
            button.disabled = true;

            const emailContent = getEmailContent();
            const response = await fetch('http://localhost:8080/api/email/generate',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    emailContent: emailContent,
                    toneOfReply: "Professional"
                })
            });

            if(!response.ok){
                throw new Error('API Request Failed');
            }

            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if(composeBox){
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            } else {
                console.error('Compose Box Not Found');
            }
        }
        catch(error){
            console.error(error);
            alert('Fail To Generate The Reply');
        }
        finally{
            button.innerHTML = 'AI Reply';
            button.disabled = false;
        }
    });
    
    const sendButton = toolBar.querySelector('[data-tooltip="Send"]') || toolBar.firstChild;
    toolBar.insertBefore(button, sendButton.nextSibling);
}

const observer = new MutationObserver((mutations)=>{
    for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposedElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );
        if(hasComposedElements){
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});