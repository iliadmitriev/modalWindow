function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal Title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorem et id ipsam porro quia
                    quo repellat repellendus reprehenderit repudiandae.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
`)
    document.body.appendChild(modal)
    return modal
}

/*
* title: string
* closable: boolean
* content: string
* width: string('400px')
* destroy(): void
* ---------
* window should be closed if user click X or gray overlay
* setContent(html: string): void
* onClose(): void
* onOpen(): void
* beforeClose(): boolean | true - window is closable
* ---------
* animate.css
* different type of animation
* */
$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    
    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {
        
        }
    }
}