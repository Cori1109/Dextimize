import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Dex.module.css";

export default function Dex() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.topDiv}>
          <Link href="/">
            <div className={styles.logoDiv}>
              <img src="favicon.png" width="22px" height="22px" />
              Dappers
            </div>
          </Link>
          <div className={styles.signDiv}>
            <img src="avatar.png" width="20px" height="22px" />
            Sign In
          </div>
        </div>
        <div className={styles.welcomeDiv}>
          <div className={styles.welcomeInside}>
            <div className={styles.welcomeTitle}>
              WEB 3.0 AT YOUR FINGERTIPS
            </div>

            <div className={styles.description}>
              We provide you the framework to jet speed your ideas.
            </div>
            <div className={styles.linkDiv}>
              <a href="#">
                <img
                  src="/github-icon.png"
                  alt="Github Icon"
                  width={36}
                  height={36}
                />
              </a>
              <a href="#">
                <img
                  src="/discord-icon.png"
                  alt="Discord Icon"
                  width={36}
                  height={36}
                />
              </a>
              <a href="#">
                <img
                  src="/twitter-icon.png"
                  alt="Twitter Icon"
                  width={40}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.builtStep}>
          <a href="#" className="card-grid card-dex hoverScaled">
            <div>Build your DEX</div>
          </a>
          <a href="#" className="card-grid card-token hoverScaled">
            <div>Create a token</div>
          </a>
          <a href="#" className="card-grid card-liquid hoverScaled">
            <div>Provide liquidity</div>
          </a>
          <a href="#" className="card-grid card-trading hoverScaled">
            <div>Stake and earn</div>
            <div>APR</div>
          </a>
        </div>

        <div className="div-built">
          <div className="card-built">
            <div className="title-built">
              A growing ecosystem of decentralized exchanges built with
              Dextimize.
            </div>
            <p>Learn more</p>
          </div>
          <div className="div-inbuilt">
            <div className="rectangle-built hoverEffect">
              <div className="img-built">
                <img src="/icons-lightning.png" alt="Lightning Icon" />
              </div>
              <div className="text-built">
                <div className="subTitle">Build fast</div>
                <div className="subText">
                  Create a functioning DEX in a few easy steps
                </div>
              </div>
            </div>
            <div className="rectangle-built hoverEffect">
              <div className="img-built">
                <img src="/icons-creativity.png" alt="Creativity Icon" />
              </div>
              <div className="text-built">
                <div className="subTitle">Build smart</div>
                <div className="subText">
                  Token and liquidity functions streamlined so you can bring
                  your idea to life
                </div>
              </div>
            </div>
            <div className="rectangle-built hoverEffect">
              <div className="img-built">
                <img src="/icons-crowdfunding.png" alt="Crowdfunding Icon" />
              </div>
              <div className="text-built">
                <div className="subTitle">Expand</div>
                <div className="subText">Build upon your initial DEX</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-community">
          <div className="div-incom">
            <div className="title-comm">Discover the Dextimize community</div>
            <div className="text-comm">
              Build, earn, learn, favorite, and explore with Dextimize. Connect
              with us on Twitter, Discord, and Instagram and visit #dextimize
              for inspiration.
            </div>
          </div>
          <div className="div-income">
            <img src="/bg3.png" />
          </div>
        </div>
        <div className="div-browse">
          <div className="content-browse">
            <div className="title-browse">
              Browse and search DEX built with the Dextimize ecosystem
            </div>
            <div className="text-browse">
              Browse and search DEX built with the Dextimize ecosystem
            </div>
          </div>
          <div className="div-search">
            <input type="text" placeholder="Search" className="input-search" />
            <button className="btn-search hoverEffect">New</button>
            <button className="btn-search hoverEffect">Most viewed</button>
            <button className="btn-search hoverEffect">
              Add filter
              <img src="/icons-circle-plus.png" width={18} height={18} />
            </button>
          </div>
        </div>
        <div className="div-sites">
          <div className="card-sites hoverEffect">
            <div className="card-avatar">
              <img src="/icons-Aave.png" />
              <span className="span-badge">Dapp</span>
            </div>
            <div className="text-sites">
              Aave
              <p>Earn interest by depositing and borrowing assets.</p>
            </div>
          </div>
          <div className="card-sites hoverEffect">
            <div className="card-avatar">
              <img src="/icons-1inch.png" />
              <span className="span-badge">Aggregator</span>
            </div>
            <div className="text-sites">
              1inch
              <p>DeFi/DEX aggregator.</p>
            </div>
          </div>
          <div className="card-sites hoverEffect">
            <div className="card-avatar">
              <img src="/icons-Status.png" />
              <span className="span-badge">Dapp</span>
            </div>
            <div className="text-sites">
              Status
              <p>Secure messaging app, wallet, and web3 browser.</p>
            </div>
          </div>
          <div className="card-sites hoverEffect">
            <div className="card-avatar">
              <img src="/icons-Futureswap.png" />
              <span className="span-badge">Dapp</span>
            </div>
            <div className="text-sites">
              Futureswap
              <p>Decentralized trading protocol for perpetual swaps.</p>
            </div>
          </div>
          <div className="card-sites hoverEffect">
            <div className="card-avatar">
              <img src="/icons-Zerion.png" />
              <span className="span-badge">Tool</span>
            </div>
            <div className="text-sites">
              Zerion
              <p>Build and manage your DeFi portfolio in one place.</p>
            </div>
          </div>
          <div className="card-sites hoverEffect">
            <div className="card-avatar">
              <img src="/icons-Aloe.png" />
              <span className="span-badge">Dapp</span>
            </div>
            <div className="text-sites">
              Aloe
              <p>Active liquidity provision solution for advanced AMMs.</p>
            </div>
          </div>
        </div>
        <div className="div-comingsoon">
          <div className="shadow-comingsoon">
            <div className="title-comingsoon">
              The easiest and quickest way to launch your DEX
            </div>
            <div className="text-comingsoon">
              Dextimize is the first generative platform to streamline launching
              your own DEX. You can customize and create your own exchange in a
              matter of minutes
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverScaled"
        >
          <span className={styles.logo}>
            <Image src="/circleC.svg" alt="circleC" width={17} height={12} />
          </span>
          Copyright 2021 Dappers
        </a>
      </footer>
    </div>
  );
}
