import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="">
                        <img src="/images/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com" target="">
                        <img src="/images/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="">
                        <img src="/images/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Arthur Hirche.
            </p>
        </section>
    </footer>)
}

export default Rodape