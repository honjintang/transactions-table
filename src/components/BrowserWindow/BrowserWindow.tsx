import './BrowserWindow.css'

interface BrowserWindowProps {
    children: React.ReactNode
}

const BrowserWindow = ({ children }: BrowserWindowProps) => (
    <div className="browser-window">
        <div className="bar">
            <div className="controls">
                <span className="circle red" />
                <span className="circle yellow" />
                <span className="circle green" />
            </div>
        </div>
        <div className="content-area">
            {children}
        </div>
    </div>

)

export default BrowserWindow;