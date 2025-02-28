import { useState } from 'react';
import pick from './assets/pick.png';
import './css/app.css'
import Game from './components/Boardgame';

const App = () => {
  return (
    <div>
      <img src={pick} alt="img" />
      <h1>Welcome to Game Night</h1>
      <h3>Choose Whichever you would like</h3>

      {/* Strategy Games */}
      <table className='tablething'>
        <thead><tr><th>Strategy Games</th></tr></thead>
        <tbody>
          <tr>
            <Game name='Chess' imgsrc='che.jpg' link='https://www.amazon.com/Foldable-Magnetic-Professional-Tournament-Begainners/dp/B08Q3LZS8L/ref=sr_1_2_sspa?crid=35YYDNF75UDSO&dib=eyJ2IjoiMSJ9.0PW-uEB3abIKkDMlHqnB_Tc5E3qN1giom73WFdrXjAKqr1Y7SOFwiYRlmgkoMqNFi5AQvWeI6GDSknH-xmydc3JRfMLHhd_PT2Ye8EN7WOj31pc7fLHHtu7VkEaWpOkP0Hyesb15QVVTxniwm4KDznMOkjlZTnxF9aLctPmdsdcer0TzoUFiyJ6prLML0vH1znsasctlXGFtrXoFabQuqtYiWqBxBM9UPUhtpZorfPQy8bc8w3b1NovLZyJiQYOKysCQbDW8spCIRei8MdN9HM4Nt7CmzCXm4CrFg6ICnMA.Ly0BujXvTy5Jl3fAjUIj9yZFKQQT8mqvefc4KF7XmN4&dib_tag=se&keywords=chess&qid=1740769750&sprefix=chess%2Caps%2C118&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1' />
            <Game name ='Checkers' imgsrc='chk.jpg' link = 'https://www.amazon.com/Pressman-1900-06-Checkers-Red-Box/dp/B003AD781S/ref=sr_1_6?dib=eyJ2IjoiMSJ9.f6tvxOaNKklW0X4st5WUEDKSG8SSbq65NT9IEfYav5cdbTPGaEs2OyGKcfBUB9fPOCdDd52VYKh1gvuQoLviFMQEZpT_J91xbGhmom5uXufdXLO4p8q1CZ8YsK2HlZjkXscUKUgygUtfo-hyokgl8NyttuTYfpj4xOx-DOdK_WiivWXAU4RaNfwLcgo4r8h31QPIBczN6KjAVhh4ZLy4nWorA_iOFHHKvKr3x9379WoaqJ5eI4Bm7brIcjg5TgnEfo-qk47AHYe1tb6uChTaksWWc6n3WhufxAyyLflhEHa_ruTuyS5R1y2TOcxPGVrxNEYH02npfVgjLf2TYEMRGo44jG1f96sEpMeQafHOlTUapcoeUu4yWJTI4VahuKCXhHrjOzp2I89npcwk3j1Wr24hfYlqw09a6vLWwUYt8BzZ5HSkgnrd-7hhy5L8x31o.XKG07hK4YAsbSO0TINSwBVs6kGPUxMJnBVJ4iCbZixU&dib_tag=se&keywords=checkers&qid=1740764971&sr=8-6'/>
            <Game name ='Go' imgsrc='go.jpg' link='https://www.amazon.com/Magnetic-Single-Convex-Plastic-Set-14-7/dp/B005A29Z5Y/ref=sr_1_1?crid=3SUJPMKSNLL6Z&dib=eyJ2IjoiMSJ9.auQvDyJwGrw1oyWPJ1kwSU0pXu2CErL5oWWOWeLC6E9pdoCiU9aBhNLaDTQunw8ByT2ci7ljQvOicwciEeDlHk7eqsZFwdNf8kea_XPLVOJf9w8P4i_73qfIzYtrkMcfPm2Vd5HcJOIke3AftS0iW-UCCrUMXOi566_qxQMirOf3HCvsiMOp9lIpnZGmquXhvqageF9rUsc5WKc-j9E2ESDArOOC8jV2a2C41q2W1cHEiW1du_fq-h_EMAHCzg01YEj8Bd1ImQCrCL8DXXXCm-PcJvH1prYKpNeyS7A_f3g7vjcoDHzk5HtnaQIPJ8po2RVwT6xftmf9GXnEQ8Y7i_Eh7jDuNn5wEhINPw_l2F2isimhV0y99jEgBdfugLFFtPlbZdom_0unE5xcpJkvFg4oanBSXbFk-u5ffmQ9vqlmVCutI5KALFqej7rkFHc-.OeYmCqx8o1jtYmMY51DMU2EU1ZTAg0z2CGZpNUx-JRw&dib_tag=se&keywords=go&qid=1740770253&sprefix=go%2Caps%2C137&sr=8-1&th=1'/>
          </tr>
        </tbody>
      </table>

      {/* Party Games */}
      <table>
        <thead><tr><th>Party Games</th></tr></thead>
        <tbody>
          <tr>
            <Game name ='Spy' imgsrc='spy.avif' link ='https://www.amazon.com/Czech-Games-00036CGE-Codenames-Pictures/dp/B01HT9DERU/ref=sr_1_2?crid=29WJN5SEFZSKI&dib=eyJ2IjoiMSJ9.lWPs2SwlTuel9IJ9_8O4etv8O9JQ8fyvZQ2lM4a-1RmkLjVN5lq_w7WZoq3Qp0HTFVv-XFKErUtSxl1HoNaKZRM13m370mAUt7C8AZo6Q8OD1b8YyTd3VGEv7LQhfjG_ljSq1Oqvharvk8yi6iNyqNujYJ9gn6sVjE9gDZhH2Es0VF3H72jjMD8cIMYtSPj8vduK9wvZ_mVAqlkgHdJau_U7aicsleTtzas5I0os0Qbccz0b_xFHajP78tncT4KeVvW1FHq2cMhyCaYrUHuJRxJcmAyA_7u_nzKv1jzZ2XfzhQfQ9NrmJe4S80xp2VdyOOyi9XO1ngkCUySUt4CSHNiKpAI3zl3H_pmlPlI6toADdL_Myf_9gxrwaRrjcP6HNyjBLgtuxD5QoeMVVpbNrc7HapqahYenLl-b-9h2V-auYT66Cncm1GII9mAnbRrx.L9USQouSDU4rmf6AJm5IO9NcZLhHGZ_Vv9DGhWxS6_Y&dib_tag=se&keywords=codenames&qid=1740770590&sprefix=codename%2Caps%2C115&sr=8-2'/>
            <Game name ='Cards Against Humanity' imgsrc='car.jpg' link ='https://www.amazon.com/Cards-Against-Humanity-Expansion-Whole/dp/B0CZ5KNLQJ/ref=sr_1_1_sspa?crid=2NZMDETOQN3RX&dib=eyJ2IjoiMSJ9.gWvkbcrH3yXbvn8KDaS21CYMItBbOnuDoM3OdfjiKK5VdnMRV6nwnV188c1RNsrZm4SPM1euwwh6fKGbD0dbwZkF-4wipTF_LoyYaG9fmHIRT4XfSFRJyEP0P-6RKIdbpxhReghKdNZaeUmOpgVyxMuDC1KFQULlbqcrToOJUsxrt0M8F85dx2sumQe7yLkvflOPlcmCjNUznmk8oaQhnzok7FDyGRg5SvRVzoVqJhAvre4oBzdFyurSg81A7rm4r2ufTlGmYx0mTNx2oBH7TGctpaJk5hpCYt5-FHtwczk.x1ctdkl0QVJYJRTEGDP6OTJjrseMSKkOxFliMB65DR0&dib_tag=se&keywords=Cards+Against+Humanity&qid=1740770643&sprefix=cards+against+humanity%2Caps%2C261&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'/>
            <Game name ='Pictionary' imgsrc='pic.jpg' link ='https://www.amazon.com/Pictionary-Drawing-Guessing-Catch-All-Category/dp/B07STLTFHG/ref=sr_1_1_sspa?crid=2Y600LC5IE8MA&dib=eyJ2IjoiMSJ9.Eifuf3pAykpOS6hYLRWoEym6we6JNn7tLKShuHkNzNvzSRiD_gzZapQQI6h0kvbGhIlBffdA8zmOazQY29tjYCMoJFm7Uu9p-kG7EIKYUcrw9YNU7KZ6Cht4DW42hARrflGrN-jaXXDLagRYkbIRf0DTvus9eosgy9eOR6S21tvp1XBdgb6hp_ZSJbgWs0lm1ZjZA4Egf1rvIQ8xbxvsCVYyDkql6H4H6fk4XDnZRucwlfOohk8PpIfPGJOR1ThsXlVaNvEfC6ybtcH02DeLuJhVlLN3Y1XCXolZCgTIXCg.wdvF5nzDF-2YyD71SJMZnFSRTSYRDyNM3FT6e7aQBW0&dib_tag=se&keywords=pictionary&qid=1740770677&sprefix=pictionary%2Caps%2C139&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'/>
            </tr>
        </tbody>
      </table>

      {/* Social Deduction Games */}
      <table>
        <thead><tr><th>Social Deduction Games</th></tr></thead>
        <tbody>
          <tr>
            <Game name ='Werewolf' imgsrc='wer.jpg' link ='https://www.amazon.com/Bezier-Games-ONUWBEZ-Ultimate-Werewolf/dp/B00HS7GG5G/ref=sr_1_3?crid=38VPXDYT2005K&dib=eyJ2IjoiMSJ9.AC94K8zooJ7Yr-dAADvBp3tylNESxmREa5Wh_DI8qv_nOd3L2f0D7mhIi11kMJPTpzUBO6RNE2nhdYGcCm1ZrHtfHFREJT1CsloKARJ8pFCKZrT3MhycYKmVTEFvJnPfa_jd9UfGClt7oh4rbtYH65TjHR_KgdaXl6UtnDhz7HTp3nPyFmkXme-20fjwVncvXPwTx9Rz31s7USjsYpEw1ttnLl7TO1rvJZ2_d-O3a3w.n20LgWdz5-F7pDz3DVr8XrOpAPJzuj_mv8KHTOD3sUI&dib_tag=se&keywords=werewolf&qid=1740770767&sprefix=wereworlf%2Caps%2C121&sr=8-3'/>
            <Game name ='Secret Hitler' imgsrc='hit.webp' link ='https://www.amazon.com/Secret-Hitler/dp/B01JKD4HYC/ref=sr_1_2?crid=1M91C1WY4IWZS&dib=eyJ2IjoiMSJ9.c4rktFwHG6-Qvsrk99HN13mcfDZ_fUmpDSYV_LXBpag9yvKSH0P-flSNKMTN6LKSKElTgVvz5GtmccH5Z9L1oHee0OcNJXoz-eIyXYl57vg8ZJyzdBG6_m9wawfTXsEpIzx7PCHJ_OvtaVJQ4jp6X3zOdo6Mc8eRJtqvhOQqTzu3tRKweXG0HhOh_xlCV51oLAy-nOfbpj6rN9BtF5_l4kry2sKmEwJPYmWejdIk9bktJVXIVKIqgBAoHNIeILzLn0zhMcj1s5_EBBkrIpZoZzOipXgb3p_0_qReiZSE6Ox69sI7WDsgLLRB5BppmtL5PoRI1I9YaIlbWJSlY4hReYFTsB1cwhfg7LENVppG5jf6tpl4s2a-0Nv1-_eM_BNqwrDXOLcgCsQwsRRQqwgXaQIEkp4pKa7Sl0OK55flAnH-b53Sd9XQfwgisIG4W7WP.-fc3g441P2FYKuxdnqfc3RuukBFPGDy4JhW1-q-DQJM&dib_tag=se&keywords=secret+hitler&qid=1740770783&sprefix=sec%2Caps%2C111&sr=8-2'/>
            <Game name ='Among Us' imgsrc='amo.webp' link ='https://store.steampowered.com/app/945360/Among_Us/'/>
            </tr>
        </tbody>
      </table>

      {/* Roll and Move Games */}
      <table>
        <thead><tr><th>Roll and Move Games</th></tr></thead>
        <tbody>
          <tr>
          <Game name ='Monoploy' imgsrc='mon.jpg' link ='https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2MDIzNzkyMTA4MTkyMzMzOjE3NDA3NzA5MDU6c3BfYXRmOjIwMDA3NzMzMDQ5MjU5ODo6MDo6&url=%2FMonopoly-Sparkle-Glittery-Pearlescent-Exclusive%2Fdp%2FB09R41HWR6%2Fref%3Dsr_1_3_sspa%3Fcrid%3D31P4ZTVH3F05G%26dib%3DeyJ2IjoiMSJ9.NWecK0qWW0NwokdelAkOIDxxxUg0Ct3uO4C_IuNjOaC7bkjLJcgXDUp76vliWVdbK5Rf-8UX3y7Vtv5xQdZDwrQlWdIFlpIuY_yqvo68vhc2hoooGaa8jPKTUZTgOpRcW6nOgpM1yugYGAYM_AVSakYkUEpfPKjESJZTlq6pdbh05pnZ5yOGvkEmZ779YDX5GwybVR0rKKTAMsSU-yzPMwcdJEmjkYJ8jQJQK36ST51w_vcnl6RwJOwATdNglnwCSvot-3YchbB3H3ktTZI5ObXzTKGGGeebGl5C9-Y_FGM.tF2N9piDos4AMIeff6rK4l8JSxomEAs85dL0OJFVMFM%26dib_tag%3Dse%26keywords%3Dmonopoly%26qid%3D1740770905%26sprefix%3Dmonoplo%252Caps%252C159%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'/>
          <Game name ='Candy Land' imgsrc='can.jpg' link ='https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NTA2NjkzMjgyNTA3NTk0OjE3NDA3NzA5Mjg6c3BfYXRmOjMwMDY1ODExODA0MzEwMjo6MDo6&url=%2FHasbro-Gaming-Kingdom-Adventures-Exclusive%2Fdp%2FB00000DMF5%2Fref%3Dsr_1_1_sspa%3Fcrid%3DAJTSKG82E3XG%26dib%3DeyJ2IjoiMSJ9.9olATBbIcpxvJQxEEaXznj3x7b2jnibQMkQC_s0EQ22xdSA6Rq9BkOVryKQTlvLJmn-DOg09nsG8R4REJ3jPhF_zd4qmEjHD5P8GNPgwo-uQlZwLVkQw_o03moVgC03WZl-cR9TfP3dm--dszXA6wYOusDyN3M5usWb_Eu1VYsoO7s2LdGSoeiYSI2rKaYxMHyXXwy9XYyo0LwvjiwsvXD2C174ev9dtlXTFXbJFHNub6GpjBW_04DrBrBwcwECGXVmDlCpehBhyXtq8FphqBsfhMKsUCvyRRBmff3oNlG0.qdD5LogI2v-gQlaHzNkcLlB3zOnPUzazXlIvWIKiu48%26dib_tag%3Dse%26keywords%3Dcandy%2Bland%26qid%3D1740770928%26sprefix%3Dcandy%2Balnd%252Caps%252C122%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'/>
          <Game name ='The Game of Life' imgsrc='lif.jpg' link ='https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozMTkyNDgyNjMzOTQzOTE4OjE3NDA3NzA5MTc6c3BfYXRmOjIwMDA1OTUzNzk0NjI5ODo6MDo6&url=%2FHasbro-Gaming-Board-Amazon-Exclusive%2Fdp%2FB06XY48MK1%2Fref%3Dsr_1_1_sspa%3Fcrid%3D14AU1719MROZP%26dib%3DeyJ2IjoiMSJ9.s5msIvu1qfsaoANxR6si9GEzgj-_QLHLuGaTqx0GhNAyHBeZDL0mLXHIPST6VU9QO6pWYAmQV7-Gde9L-ucmOgThIrq6TKNrQIXjy2PZESRQIjNRwd4kuc4KNBmZf7GW7lPde8IyGV1WBSzGtzID5LtHbqf7nvitxeBBQecC2SJT2jSH7HC8vHkOproYwjkqBtYf1PQqkkV5d3ErHRAtKG0J9sKtO9akT7NmK8M1ejsAonOvZppjUJ1thWxcYIQydk-hhnoQzs5pGbc2ATeZTNygx3KKnJPdXvS22vpFqNU.cgJHaLRDEySz6PBiFq6Fw1XreEtS-4HstikcRLsRcEU%26dib_tag%3Dse%26keywords%3Dthe%2Bgame%2Bof%2Blife%26qid%3D1740770916%26sprefix%3Dthe%2Bgame%2Bof%2Blif%252Caps%252C152%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
