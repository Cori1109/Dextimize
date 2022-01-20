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
          <a href="#" className={styles.dexCard}>
            <div>Build your DEX</div>
          </a>
          <a href="#" className={styles.tokenCard}>
            <div>Create a token</div>
          </a>
          <a href="#" className={styles.liquidCard}>
            <div>Provide liquidity</div>
          </a>
          <a href="#" className={styles.tradingCard}>
            <div>Stake and earn</div>
            <div>APR</div>
          </a>
        </div>

        <div className={styles.builtDiv}>
          <div className={styles.cardDiv}>
            <div className={styles.builtTitle}>
              A growing ecosystem of decentralized exchanges built with
              Dextimize.
            </div>
            <p>Learn more</p>
          </div>
          <div className={styles.inbuiltDiv}>
            <div className={styles.builtRec}>
              <div className={styles.builtImg}>
                <img src="/icons-lightning.png" alt="Lightning Icon" />
              </div>
              <div className={styles.builtText}>
                <div className={styles.subTitle}>Build fast</div>
                <div className={styles.subText}>
                  Create a functioning DEX in a few easy steps
                </div>
              </div>
            </div>
            <div className={styles.builtRec}>
              <div className={styles.builtImg}>
                <img src="/icons-creativity.png" alt="Creativity Icon" />
              </div>
              <div className={styles.builtText}>
                <div className={styles.subTitle}>Build smart</div>
                <div className={styles.subText}>
                  Token and liquidity functions streamlined so you can bring
                  your idea to life
                </div>
              </div>
            </div>
            <div className={styles.builtRec}>
              <div className={styles.builtImg}>
                <img src="/icons-crowdfunding.png" alt="Crowdfunding Icon" />
              </div>
              <div className={styles.builtText}>
                <div className={styles.subTitle}>Expand</div>
                <div className={styles.subText}>
                  Build upon your initial DEX
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.communityDiv}>
          <div className={styles.incomDiv}>
            <div className={styles.commTitle}>
              Discover the Dextimize community
            </div>
            <div className={styles.commText}>
              Build, earn, learn, favorite, and explore with Dextimize. Connect
              with us on Twitter, Discord, and Instagram and visit #dextimize
              for inspiration.
            </div>
          </div>
          <div className={styles.incomeDiv}>
            <img src="/bg3.png" />
          </div>
        </div>
        <div className={styles.browseDiv}>
          <div className={styles.browseContent}>
            <div className={styles.browseTitle}>
              Browse and search DEX built with the Dextimize ecosystem
            </div>
            <div className={styles.browseText}>
              Build something cool with Dextimize? Enable public view on your
              DEX to feature your work here.
            </div>
          </div>
          <div className={styles.searchDiv}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>New</button>
            <button className={styles.searchBtn}>Most viewed</button>
            <button className={styles.searchBtn}>
              Add filter
              <img src="/icons-circle-plus.png" width={18} height={18} />
            </button>
          </div>
        </div>
        <div className={styles.sitesDiv}>
          <div className={styles.sitesCard}>
            <div className={styles.avatarCard}>
              <img src="/icons-Aave.png" />
              <span className={styles.badgeSpan}>Dapp</span>
            </div>
            <div className={styles.sitesText}>
              Aave
              <p>Earn interest by depositing and borrowing assets.</p>
            </div>
          </div>
          <div className={styles.sitesCard}>
            <div className={styles.avatarCard}>
              <img src="/icons-1inch.png" />
              <span className={styles.badgeSpan}>Aggregator</span>
            </div>
            <div className={styles.sitesText}>
              1inch
              <p>DeFi/DEX aggregator.</p>
            </div>
          </div>
          <div className={styles.sitesCard}>
            <div className={styles.avatarCard}>
              <img src="/icons-Status.png" />
              <span className={styles.badgeSpan}>Dapp</span>
            </div>
            <div className={styles.sitesText}>
              Status
              <p>Secure messaging app, wallet, and web3 browser.</p>
            </div>
          </div>
          <div className={styles.sitesCard}>
            <div className={styles.avatarCard}>
              <img src="/icons-Futureswap.png" />
              <span className={styles.badgeSpan}>Dapp</span>
            </div>
            <div className={styles.sitesText}>
              Futureswap
              <p>Decentralized trading protocol for perpetual swaps.</p>
            </div>
          </div>
          <div className={styles.sitesCard}>
            <div className={styles.avatarCard}>
              <img src="/icons-Zerion.png" />
              <span className={styles.badgeSpan}>Tool</span>
            </div>
            <div className={styles.sitesText}>
              Zerion
              <p>Build and manage your DeFi portfolio in one place.</p>
            </div>
          </div>
          <div className={styles.sitesCard}>
            <div className={styles.avatarCard}>
              <img src="/icons-Aloe.png" />
              <span className={styles.badgeSpan}>Dapp</span>
            </div>
            <div className={styles.sitesText}>
              Aloe
              <p>Active liquidity provision solution for advanced AMMs.</p>
            </div>
          </div>
        </div>
        <div className={styles.futureDiv}>
          <div className={styles.shadowDiv}>
            <div className={styles.futureTitle}>
              The easiest and quickest way to launch your DEX
            </div>
            <div className={styles.futureText}>
              Dextimize is the first generative platform to streamline launching
              your own DEX. You can customize and create your own exchange in a
              matter of minutes
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer}
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
