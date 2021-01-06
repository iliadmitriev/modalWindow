$.confirm = function (options) {
    return new Promise((resolve, reject) => {
            const modal = $.modal({
                title: options.title,
                width: options.width,
                content: options.content,
                onClose() {
                    modal.destroy()
                },
                closable: false,
                footerButtons: [
                    {
                        text: 'Отменить', type: 'secondary', handler() {
                            modal.close()
                            reject()
                        }
                    },
                    {
                        text: 'Удалить', type: 'danger', handler() {
                            modal.close()
                            resolve()
                        }
                    }
                ]
            })
        modal.open()
        }
    )
}