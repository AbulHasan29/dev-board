document.addEventListener('DOMContentLoaded', () => {
    const completedCountElement = document.getElementById('increase-value');
    const assignedCountElement = document.getElementById('decrease-value');

    let completedCount = parseInt(completedCountElement.textContent, 10);
    let assignedCount = parseInt(assignedCountElement.textContent, 10);

    const logContainer = document.createElement('div');
    logContainer.classList.add('p-2', 'space-y-2', 'mt-4');

    const logSection = document.querySelector('.log_section');
    logSection.appendChild(logContainer);

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    function addLogMessage(taskTitle) {
        const logMessage = document.createElement('p');
        logMessage.classList.add('p-2', 'bg-slate-100', 'rounded', 'text-sm');

        const currentTime = getCurrentTime();
        logMessage.textContent = `You have completed the task ${taskTitle} at ${currentTime}`;

        logContainer.appendChild(logMessage);
    }

    const completedButtons = document.querySelectorAll('.btn-primary');

    completedButtons.forEach(button => {
        button.addEventListener('click',function() {
            if (button.disabled) return;

            const card = button.closest('.rounded');
            const taskTitle = card.querySelector('.font-bold.text-xl').textContent;

            addLogMessage(taskTitle);

            completedCount++;
            completedCountElement.textContent = completedCount;

            assignedCount = Math.max(0, assignedCount - 1);
            assignedCountElement.textContent = assignedCount;

            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');

            alert(`Board Updated Successfully`);
            if(assignedCount===0){
                alert('Congrats!!You have completed all the current task');
            }

        }, { once: true });
    });

    const clearHistoryButton = document.querySelector('.btn-accent');
    clearHistoryButton.addEventListener('click', function() {
        logContainer.innerHTML = '';
    });
});
