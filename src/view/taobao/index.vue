<template>
    <div class="taobao">
        <div class="nav">
            <div class="nan clearfix">
                <ul>
                    <HoverSelect
                        :options="options"
                        :title="options[1].label"
                        dWidth="220px" dHeight="300px"
                        @selectItem = 'selectItem'
                        :isselect="true">
                    </HoverSelect>
                    <li class="red">亲，请登录</li>
                    <li>免费注册</li>
                    <li>手机逛淘宝</li>
                    <li>网页无障碍</li>
                </ul>
                <ul class="ul2">
                    <HoverSelect
                        :options="options2" 
                        title="我的淘宝"  
                        dHeight="100px" 
                        @selectItem = 'selectItem2' 
                        :isselect="false">
                    </HoverSelect>
                    <li><el-icon style="width: 12px;height: 12px;margin-right: 5px;"><ShoppingCart style="color: #ff4400;" /></el-icon>购物车</li>
                    <HoverSelect 
                        :options="options3" 
                        title="收藏夹" dHeight="100px" 
                        @selectItem = 'selectItem3' 
                        :isselect="false">
                        <template #icon>
                            <el-icon style="width: 12px;height: 12px;margin-right: 5px;"><Star /></el-icon>
                        </template>
                    </HoverSelect>
                    <li>商品分类</li>
                    <li>免费开店</li>
                    <HoverSelect
                        :options="options4" 
                        title="千牛卖家中心"  
                        dHeight="300px" 
                        @selectItem = 'selectItem2' 
                        :isselect="false">
                    </HoverSelect>
                    <HoverSelect
                        :options="options5" 
                        title="联系客服"  
                        dHeight="140px" 
                        @selectItem = 'selectItem2' 
                        :isselect="false">
                    </HoverSelect>
                </ul>
            </div>
        </div>
        <div class="tbh-superbanner">
            <a target="_blank" class="superbanner-inner" href="https://pages.tmall.com/wow/a/act/tmall/tmc/38066/21191/wupr?spm=a21bo.jianhua.1112.1.5af92a89VJDpEu&wh_pid=main-525861&disableNav=YES&status_bar_transparent=tru"></a>
        </div>
				<div class="all">
					<img class="decorations-item" src="https://img.alicdn.com/imgextra/i4/O1CN01bPfxPT1ilWbRoIGR1_!!6000000004453-2-tps-360-800.png" alt="">
					<!-- <div ></div> -->
					<div class="centerBox">
						<div class="search-decorations">
							<div class="taobaopng">
									<a href="https://www.taobao.com"><img src="https://img.alicdn.com/imgextra/i1/O1CN01f9WlcR1TkrnbjAgWe_!!6000000002421-1-tps-160-120.gif" alt=""></a>
							</div>
							<div class="inputBox">
									<div class="inputwrap">
											<div class="inputwrapLeft">
													<HoverSelect
															:options="options6"
															title="宝贝"
															dHeight="100px"
															dWidth="50px"
															@selectItem = 'selectItem'
															:self="true"
															:isselect="true">
													</HoverSelect>
													<div class="hr"></div>
											</div>
											<div class="inputwrapMiddle">
													<input type="text">
											</div>
											<div class="inputwrapRight">
													<button>搜索</button>
											</div>
									</div>
									<div class="searchHot">
											<span>新款连衣裙</span>
											<span>四件套</span>
											<span>潮流T恤衫</span>
											<span>时尚女鞋</span>
											<span>短裤</span>
											<span>半身裙</span>
											<span>男士外套</span>
											<span>墙纸</span>
											<span>行车记录仪</span>
									</div>
							</div>
							<div class="qrBox">
									<div class="qr">
											<a href="https://market.m.taobao.com/app/fdilab/download-page/main/index.html">
													<span>下载淘宝</span>
													<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAoKADAAQAAAABAAAAoAAAAACn7BmJAAAztElEQVR4Ae2dB7wdRfXHhxJCSwid0PLoCS30XkIREAQEhQgIxj+IIoINQQElSBUEBBEUQZGOFEURREpi6CUBhEAILaGFGkqoCXD/5zs352Z2dmbv7C0v7yXvfD737u7smTOzZ347c860naMiZHqoRwMzSQNzk+6TTz5p7rzzzpmUhXCyvBdbb721GThwYIbh5ZdfNrfddpv55JNPMuG77babWWqppTJh48aNs8+V8o5tvPHGZvDgwZn4ZS4mTpxobrnllqQopEN69Yh8Uy48h0s8J8+bQsT973//a+aYY44U9k7j2XLLLc2gQYOMkYesnHvuudSCXe53/vnnk70M3XzzzZV55pknl9eRI0dm+Lg477zzcnyx5zzhhBNy8csEXHfddclpHX744UmiP/3008r++++fk7v++usnxYcJHcaeeWaGgzloTsmE6dWrF4cuR6F8zTXXXGaBBRbI5ZVwn4gfCvf5uBZQh4KTw+ae2zYmSfy9e/dO4oMpxDvffPMlxw/pMDlyGxk1XxaAbUynR3SPBgo10O0AKLW2mTZtWu6hCJ+ZNOec6apMrZV5ns8++yz3WKGwHFM3CYi2GzRJyyyzjG2e21m4GMcA6qWXXgoCy9cjzS+Oybvvvpu5Nf/882euYxcAZcCAAZnnIg8U6vjx42PR6oa//fbbZpVVVqnxIfPzzz83L7zwgpk6dWotnJM333zTPP3009jftXCaJPLlA3nppZfOyV1yySXNU089lXEsAHX//v1Nih5Ia9lll83ooJaRFp5o2eI4+jrQZKIABHzXXHONfShXURqxVUcySQaHDh1qnn/++bpiN9hgA/OPf/zDFq4yk78lllhCLwuP2E9XXXWVLQB9LvJwzjnnmG222aYwbtHNrbbayowYMaLGgswPP/zQ7LzzzhZstRtyQvriTGUACCBuv/12s+CCC9ZYAdURRxxhvvOd79TAhtxHHnnE5pVzpX79+hlxOAz5qEekdfXVV9sKRnVQL04j98nfpEmTzF577RUt2ygA9S3hbWs3kVE1SuulhVHOm94okRYvFzWLS9RWr7zyihtU6vz999+3ct1I1Oyh54KXn0vkKwQGgMXPJbp8KFiXpkyZYj7++GM3KHquZduMHqPCvRu8RCEdKFvUcEEZ0g2gfG09kk5I+e1KtB3P5Ted5B0Apj5XGS86ZAMSHxCnUFcq2ygAUx6kq/OkFgjPkQqUMs9cJn3kluV389KO/Lvy23U+SwOwXUoLyQ2BJxQWiqthqfwhsBEWClfZXfUYtQFjGcZ4llGHht5W7KztttvO7LjjjjHxdcPxHq+44gpr4BcVGE3S6NGjkwtll112MYsuumjSc11yySXmiSeeyOR17Nix5mc/+1ktPfKG5/f6669n+GIXeNE///nPbcezAolm/ctf/rLZaKONMtFWWGEFIyM3NdsKfpyrVVddNcNX9oKhRByhkDlRTxZ5GDJkiPniF79YjzVzvzQA//Of/5jf/OY3GSFlLshoMwB89tlnzcknnxx168vkxeVFefxS6IEHHsgB8JlnnjGnnnpqSvQgz3vvvWfOOuus3L3lllsuB0C82GOPPTbH22wAY+y//vWvGxbDC1cWgKWb4NDQUJkcNzvkhVcVGoork4dmedvhxITyVM+DDMVpJqzZsmkEG6UB2MwD9sTt0YCvgW4HQLogPvroI/85ZtnrZmulrq6Y0jbgzH6gxRZbzGy//faGjtciJwRDmhEWhtfUqG9n3nFg1lprrYaToBP5wQcfzIz9ku/HHnvMzufTZ8CRW3jhhc26667bcFpdKWK3A+B6661nhwgpkHoAvOiii8xhhx2WKdR2KX+TTTYx1157bcPiGTOWeX6ZERLAdvbZZ5vf/e53tZeIsC222MJ6qw0n1oUidjsAUrPNO++8SSpsxChOEhxgotsnNV+B6LYbJRTOaAo/l1KH3Nw4XfW829mAZRRJbdFZpE1ko+mVyWsj/XSN5qvd8WZpALZLeaGmPxRWJn1AFRrjDckoA9ZQ/K4U1u2a4M5UHgVNc+fWbgAt1A9IGNOvfF6aZb/Gokl158chk7h9+vSxdm0RmJGPTHoCXCASB5ODvsPuRD0ALCitF1980Rx88MGZaU4U9OOPP56Ldd9999m5fy4AAcoFF1xgJ5q6EXBWfv/739eCkLnQQguZyy67zK5NKQIgoCNfzDN0AQh4hw8fbpgv2Z2oB4AFpcWcvVtvvTVTq8XY33rrLdtd4t4HSP68P+4z8XbUqFEuq11SylBg0dw5jXD//ffb8Xi95gjYv/e977lB3eK8xwYsKCaazjIr0HxRxPWbX3hCc/9oPlO9W98rRiZpdbfml3z3ABAt9NBM00BpAPo7EpTNebPxy6RHs+QTzWLqZAZsLJyDVpPrgKhs0knNl8Zp9bHZsmkkfmkbcKeddrLVfZGhHFMMBnozC3+Qi/30t7/9zQIj1Ly5aTO05Rrq3ENJp512WmadBd0fX/jCFwyjGS6x0AnDPgQYl498sEqNRVwpxJYjRx99dI2V+OjmlFNOsWHolmvCmd60zjrr1HjbecI0OcaeGy1bnqsslQYgmWxmPl/ZDPr8TEgFFIwFN0KA6fTTT89Fxfj3Abj44oub4447LscbCvjXv/6VDED2ReHnEstSWdbp24GMMXcWAHkJ+XUmlW6COzNzobR4O9thbNerTUN5ccP8mta9l3JOfP+5yFOz+UpJe2bydDsAoqxGmoh2K9nt/2skLeL7z+VfNyK3q8eJApCHT+mTasUDkk53V3aopqK7JNTl0gqdNSOjK5Vt1AZEeSyAxmZq9u0uUhbKYN5eqG+rKJ5/D4cBr1fzilzsRBb7uEQ4++v5wKAJZIRBCTm8GPASx6U33njDDoW54azpYP2GS+Tn1VdfzcySQW7fvn0zTpAbpzPOtWwZPlR9tSNd9MMC+qKyjQIQo5jtMiiEdmeSDJJeM8RCqQ033LCWVx6e7SdwItxBfjpsWVXH7ghKPN+f//xnu2JPwziutNJK5vrrr891RrN67Y477nBZ7YaTrChzCY/7+9//fgbY3D/ooIPMkUce6bJ26jm63meffbpE2UYBCChS9mrpVM0VJMZSxZVXXjnD4W+/wU2aSpYv+vcAKR62SwAz9PJRU/q8q622WmYTIeSgwxDva6+95ibT6eddqWyjNmCna6XJBEMzVNyazxVPAaRQzAb2m29klbEBfW83JS+zKs8sA8BZtYBm9eeyAEytETpbGaF8UdOFZpjEarvOynOoVmSvvlDNGMoTTpD/XDxTSAeh+LGwZuPH5DYbrvmyNiDbZfzxj3/MeXvNJtJMfGwvf7QAeewwz2Ijd3gMXn83/WbSbiTuQw89ZA488MBMVF4WPPwUYtTlL3/5SwZwOFKbb755SvQoD0OfXbFsWVgFWQBSeDO7AKMa9G7gPMjO8V7ozL9kVduf/vSnhjPCxpQHHHBAw/FjEXGO+HVV6rEBu2rJzCb56gHgbFLQXfUxewA4vWRC3TgYyqG1xamORazQQ2nFeGf1cGsD0jPOFhDqyeGRYZOwUt+f1EkHLFuRubxsl8FWEY0WDFOQ2MsPL7BIBvnCWGcLjFgfXaMFxmej2PLDHV5jKhR75rlpcT/UkUy+UqZN4TDZT1Q1mtEWxGPyK/pmZZ0+L/liOhgd+vWIcnj44Yftbv9aXrxUDAS4XwpATqhs4aUM2WaOnv7KxRdfXJFVWRXZc8T+ZFPsCp+Dkk27uZ0hmYuX4/3Sl75UkYfJ8JW5kBfApke6mofQkft77LFHRcZ3k8SL91eRTt+K6KH2kxerMmHChFx8KZTK5MmTMz+Z0FqRjbxzeRJA1uSpbJk4avPlywhdk1YzJN+Py6WPvmTvxiSxUoFU1lxzzYqrb87POOOMpPiUNWXuxgc/YMMnMASWfF4wB9kaEJT639145513crOJQTRvj8/LQHwzxBtFevzqEWlJvuuxlb7PGDE/l1jqyGQGf5Koy6PnzCQWJetllz6ib57L1zc1YipRDn58sOFTrGxVp9YG1GrYjaxVqxvGeRleP27RdSw9P04qnx+vkWuUl5peO16KRvKcGif0XKGyjckrE7+It8cJiWm4J7xTNBAFIG+D74CQo9CbzrSjUHjqExBXq+R6cTBgQ/kKxePN84foaGZS85qaTijtdoaFPPMy6fFcZWo7Xzb6C62AC+m1XlrWBvQT4Fq3f+BhVTCZZkESq/r1AbiH7eMrBUDxmalHH300I55RDLa7cImvMelKN5Xr3tdz0sID33333S1gNV963z0ih20q+Fiz2wQwEyX0hSD5trC58sorayKI/8EHHyS/GLWILTzBBGDT8H/+8581qeTLt8FrNwMnN954o/nVr35Vu0N8bLWQJ19jqnNCWf/hD3+wNiDyIMoCXPCpMC0X7gFUd6KvLzoKQGoKdoP3Sbyf4Bitz0fNg6vPnikubbbZZu6lPeeB6PJJIfrm7r777qT1unQJpHw7jXQB9l133ZWShU7joSD5HEQz+eLzY83EDz0sL3RoN9h7773XfuE9FCcWFm2CYxEU3bH7bnhof2PtP3T5ypwDbL+2jcUPNcEx3mbzFZPbbLjbB9mIrM6ce1gGG/ospQGoEXuOPRpohQYsAH1DvRWCYzK6ak0Ty29qeGfqMJQnpqeFarsyNWizZaP2YCh/sTBrA66xxhpm2LBhteE1mi46KlntH+pcjAlLCccuZD5fveoaW2/bbbdtaioR25W5DkhR/nh+316kQEKr4kJyKGimZLlEgRC/DAjc+OSdZ7jwwgvdYIPTxie8XNADPobH+JKUAoEwnLBUwl6XEYrgBpz1ZFCeOJ4suFIi/6xMvOmmm+KOk0SsiLdVkQKvSBdH7SfGb0Xm3uWGfORzVESpSzKuW5ECzcWXTFWkYO0QmSio8ChAzaXDcBPDTvKQdX+5yN00wH9WmaRaKyctM1kqWpEeiow+0TP69uPHrsuUTajsjjrqqFy+ZGlvRZzBXB7Ei7alYWtA3hi/+vWvJdMtIboW+KWQ5DCFbbbjobyo3VyivNCrWyu691POy5RNTF4oXzFewi0AQwyzTeF/MNmYx2U978RHjHljgjHvvWHMVBnT/PwzqWPTXpSQ/jJhc4ipPacAZp75jem7uDGLdxgzQHa8WnM7YxZYJMPa6EVXLa96+YoCsFFFuPHqJe7yhs5j8WPhIRnRMIB35VHG3HmpLOD9JMrW1hvz9DZmK1leMFQ6ipsEotp9bc1vHeGxcgmFa1hbAciGi/QFan8gSsJb84dxMFYZsqH61oxh0IaMd5oa5iripKjSOeIsJTc/4+825rf7GPPWi3VU2ubbUwX4I8TBGHuLMYfIKMzKaQuQeE50qAuz0B/GPsOUPqEvZvmoXtEV8dGvbwrRv0pZubzI9GfJIIPyQrbykh/CfCJvlBd50OYZXsVE2wDIkkQ8KoBBJpT47JS/Px+e4uWXX56ZDIlymOTp06abbmruueeenPL22msv+601nz93DfhOGGLMZ/nCyvG2O4BRLMzcN+VFOHWIMT8dmQTCMWPG2EVkWvgiweqDPWt82nPPPe2GnG44O17st99+hlESlw4//HBz6KGHukF2NGzYsGGZ3hDAw1Ym7n6KlJc4h5m4XLBnD70pvCxaYbhl2zYAkhjdBT4tskje5uHNWH755XOfM/Djcs1b5m8CpOEh/kwYzS41X1cAHxkDfApC8nSB5G242KLz53XkPgc1yIQJE9yg6DlzGgcMGJC5Tw2otZF7g7LxeRnHVeAoL9eMp/u8et89ko6/DYp7f0bV5Ia28dyv9jWp5OZTI3hHtzbwbs24vEJsvpnd7M7ITfUMEPKDJktNeJ3ksYUU0ktM16GyCYWRvVh42ax3OgDLZrBl/B/JrO1Rl7RMXFsEAcT7LpWFFJLX2YSiAOTNwdD3Kfb2+Hyx61DVT5UecjhiMkLhfjOR43l+tDS9+efJ8cUCAAe9MvrTWivGXybclYVHPiE/C6mMOJc3VAPiPKSWLfHV2VG5XIfk6v0yx6gNiANw/PHHG+b+u4WbuhM6mWSnAD4YzQNDHENTgxj2O+mkkww2iD4Y8ffdd1+z0UYbZZ4HeTgsODeaL5yc5557LsOXu3j16VxQLgAg8MMu46ckL4jpu5QxvcXInvaRAFlAMvX9ak2lNhy8LpBqcaefuPL0nnvUtDm++pQxA7ev3ZXFQjUPFx0ydez888+v3ecELxPHghV36g2jFzzYH//4xzWbD/0ig30LqQxU38jwhyIJY49E5hO6gCW+vxUevCECP3yWjPmHWvlQtuxPuPHGG5s5JAMhtYVklQpjMiefdAgBLlUQe5q4Y4vEk6E4s/fee8fHFh3hmUe7/pfGXDtc7kYel2B6EeaRn+DLTJWf0tzSX7erbCi5xrZip71szNviPY6VzuvRtxgzlzBJgZheC8hRBMzZi73aMJLkJ44FgP30AznKOe1NCIiE845yRN6XjjFm9xPlJEz0Avh7xuCB8pkI9vlxiUrA37MGUDFG7G7S6cZp5Tl741BpMUbtEqD89re/HR8JcZkbPXe7XxqRoTWcG5ewhuR+kN2q15Vpm9UlJWSw/PrLb6L8mMiNKQYw5xFgbfQVGb0Qhk8FmW8LCCdJLTW/RFp4CWMWk+6iJVc2ZpGljVlwUQGRoInmHq/7nUnGvDxeRlnk+J78Pnk3DEJJpkYfFuRVmGIOQCg88xJOTwD9hXhr6bf4JFReWra8d7MHTfs4/JzYdFJpmR3lt6n8WJkJK7XhqOnnS65izDKD5EJobmH+WIbqANhuhwhoJeJCAkSG2Xr1FvDJfZpshvHoWqGzmeb6ZTEBRl9vzMO3CoBfEEEkHCFqzdmE2gZAUB96+8rotdn4mbQY2w0ROGA5r2DMHmkiAR9fPX1IftNERZsOFeDRNgt9JhH6LmbMV4ZLbSf9dcj9RAD2odRs1I42Hak2qQXn7VMdYusnAF2sw5gV15WOZkH5jacZ89K4apOLTJ9ovgsoVKMUsAdvtUJGULAXWC8dC0CcAHrF6zEDCDqX2bLCJew9OiwVMFSvGL/0grMuA6O1LNHZGuq0jsnp6OgwjL5oHnJ8MVMXwIFNqdBqDgiRqQWlAjOLLmPMZl8jpErwM7mACQvPPS/fDhPv+rVnqnYhTS7hNNu9xSZcalVjBm1hzGpbSRO9YrWm3HTvahN88Q8EtNLGh1TjTYJgOxR1LNBlXYdrelZjB5wAPi3GVijaFKM3yottVholPlmLs6HNK3hK2iWfFWmHHXZYUronnHCC+dGPfpThZWiICZKMLyoBhquuusoO12iG9F7KEYWkrv1AHg5LaMFT3bQESwaTSwYgjGDGLCg/qdDMXfKbJk3q9v8ndp7YdjS577xaBRqAe/AGWcl0rzHvviGMUmMBGgty0AcJUp+9X/ik2V17B2P2PM6Y5daoAnNtabYHbmbMmP8In8QD1AXEvjv6YqHLZrvCmDjL4jK/XIYPH25+8pOfFOSk+BYbbPIFAZfIN5VJjOz7x9uVOvPZdcdVKAqhFvQTom+vs74ASTcEoC9NFD6YAQsT5bfU9ONzclxuTWO23E8AKTXbcw9XJw1g060izegK6xjz0TsCytcFQCJkDnFf7VHiQXYKlqCbJnnMjWIjShN+wLkC8n7G9JFaZg3xVp++T2SLDF4C8uH+kDGd0G0rCVD4EwyQHyrbMukSPxVHKjfUAOi9Ukf/bfKvSwlrgFlriAaiVqPMtZAxL4gH8pRUf9h0gBIb7okRAryRxjCJYdDWxux1vNhzA+SmMAzc0phV5TeXIAibb075ATyAyPw/6WezALvuOGOeHGXMY7cZs8lXq7zr7GzMA9cZM05A6JKC0A2bhc9bBsDurSMBCpNDVxeATXxUADdCZqi8IOC4S5pcqeEmTzBmvV2N2fmH4qhIFfnRFMGf1Gz9BxrTIY4FwANw1HZTxYPlSHP8qZgkTwjwPpVm9oN3RbbUogAQkGJb9us/o9ZDgbMZ+HhkC8Bmaw9qO1+Gf01iraKWyhZsmAWk9tt8H2PWFZC99qwxK25gzN1XiA0nbvDLTxizrLjIOx0uTac4X49KW/3OKwIwibjAwsZQk/Wet/poL46VWu7W6gjJp9JU4xk/+z8BpPDSdE+WeEp0bgPAeei2EfsSAoANUkwnsfAGkymM1khaFoCMWOCIFHnB2qSyW8LOO+9cG7vF/qNHnW0t8NA0E5yz2s6nv/71r+aSSy6xaalMn4drHBq29vC/X8smkHxqy7VX8ORWX331kJj6YVJRyRwvAchUcSheNWbp1WTK/AD5rSDdJWdKkyy1IeOzb0405v5rBGAPCLDeFKdEIsqG6WalTaTvsG81nRcfM+aOC6TZfWt6DSgypwnffPPLA8k5NqMSzfRCiwt4BYhTpwOwdk9PwkeelS07XB1gb4c2yNxhhx0yZctwGBuSHnvssXaDyXAKjYV+9atfzZQDab3++us2LX/uoaZgAci8rpS5XURiW4ybb75Z49sjY4jnnntuDZSZm94FY7lMUEwhJpn6xBg1XxFvGUlraJvHW/8gkwDGSI22kzSr61U7mKnlJj1ZHX5j6v4UAd5HH1Q7owFQL7EZ55SjEkDsL7Xl1OXlnjgdvQTYc8nxI6kJR4v9N01AWCOJN18fuU8NKIHkA3LEVQPy/3SDpeqAeZb8XKIbh7H3VhPjw/4YMR9rlJWU0aQsAKN3E29Qc1ITpsxoKapl/eSKakift+FrCvwTARVOwkuPi2c6WobdpCkeMkw81e2rDgc1Gg7HEisKUECKRKrIbwEBHENvSjTdNMsAF2DhhNB9M1peuIcEgIS7ROc2Dgx54IfoBNJWJoE1yNJsN05QaCSQtIry2xIARtLuPsEUPpqgI/nxkdIsCng2/sp0MEkTCjroC1x02ao9B5AYZustTasFpLBAjIR8KM0sw36WR5yRj7EDpdm2uBVAZkjuT8dzBoTkZzahlgCwXW9U0ZvTlvKh4HEKVtpQ7MIFxSZ8repwYAPecl61xgNYNL/Mbll8eWO+drJMQhAgQs/cb8zNZ4kNOGUGALEtP3pdAC5xmNRQIwE2cpkxQ7r8IPe8GtLyf50W5Qsu0zr5cYuuQ/jQso0CkM5P7D0d3dDmkGYW+0ObWwzhZnbIJ+N0IrPYiPULmjHSTbVLkUFe33zzTcFGtSRxgnCWSpFgway1udR+0lUyv3QYP3B91X7DY6XL5ZP3BFwy8vHKeAGm1JYDxGFxJzlMkXsvjRVbUZp0Ks7+K8okBnHEngGAUvsxdqzEfZySzwWEZJmakB+kYKxeJf1TDmx74g6FhSKqExLqiB47dqz9KoAOKFAWDM2x+CgG2lAabhhliyOJ46MykN/R0WHZogBkHtewYcPsWJ4rEIOSvT5aSTwkGx76BmyZNGRbCAtCN46C2Q2LngM+HIjtvy3erYCNfr0x/xDQfVj1iPc+rtq8vvKUMTecJF6xgI3uFfr0lLD3iLfsqsZ0rC99i2I3Lt5hzO/HiGMi/YM04TWSuO+LU4NjIlEsIYrzBgDIuC7DYLfddltVVgP/l112meHnEt/rw+lsdESL8Xzm/sUoCkAiaG0Si9zK8FJgCSTcVF4FC9aZ2Hp/cTy2qTaV9Acy0QC7DueDH53LTDKg45k4LvjIEzzbHiwAHiROi9Sk2I1TxIGhNgWYTE5Qouak2wcQAzrAB+mxelXqvykdRFJqh0w3qUIAuoyz7DlNId7qJl+WWS97y1SrJSRAqqDRUvsx+YD7OBsQzTs7GKy+nQBHmmWaYOYBKq26mQBvCwGtVKeMHwNWjnMJbx9RNbUihB05+SVxeqRphgAdtR5AhJoAYVVA9/mPArDdyPdV1Nnp2fQBF6W9/JpSc32rOqsZkL3/tox4SF8nQ25zCBNLOamx6NfDjtvhu9WhO87tnEABFENz1JYTZLjtqbuqj7fHMVWbkBnOg6Q5XrKjGs5QHQuPmFkN6BSAeqxylfpvl/6abZnqPYQFILNhMAzdh2BWQ2rieDlquNZL0O29V17SIb2yMync+DhF2Cmpea7GFbAxT2+Hw6R2WleAML0KeupOcTTE1pPnsjUT0+/vvcqY9XevgnCRZaR57V9tkqnhXn+2OobMODLDd/QnLjFAakfpqB4vnvG8UhNuvq+ArVc1WeYMjh8lU/SlBqQE/NqP6wJi5MfXFde+DihP9M38vxQivrs1B3FwIpohygOH0i0Xzplqh6NoAcgw3E9/+lMbSGJkHECFtnoIZYb5gOx8T0IuiH1e3HyGZnyit5wtJMiUm1GfL3bNC4RzJJ+fis+Vo2ZzyTatAozBXxDPd5sZ4KNrZMRF1eaX2g/6QLzVy34iw2x/FAdjDQHUQlLbCYgmT5K1HlI7UmPSnNKlMp/YezTTTDa98y8CcGmm9z9Tasztq7IYI2Z47/Gb5HrajBqQ2g/8k023b1EufXrkkUfMhhtuWNMVOmP/FVa/nXXWWTUdUMBXX311bo6eL0+vv/vd7xq259DKBKDzUjcDQsr7m9/8pp1Eq908yKe8GOmyAJTvmTU1yxYPDBc+VLvpwxUdAZC/aqqIP3SPmdqrruoY+T6T1m5uOGsvHvxXdVIpTfDya4vjITXYKzL89qmAw8Usw3BPiUMx8TEBiNRktsmVZhnAQoI9M3iIrJ47iivpgH6/6tgwe2aJjmrtR0f3s/cZc9tZAliRpYDTI/E4rwNAajt2z3dJvtVmu0x8HZRZ+YYOV1xRWoQWEmXL8KtfvmAOsgAsqrVS8kJ8+ngaBWBKGvV46tac2G8uAS5AxAKhMQKuCdJsrr21NKcTq7aZ9T6cCBaMUiN+LHahSwpSPRJvkeWqgKMJtjbkS1JLSg057g4ZkrtG0nha7gsftR4lQFy3Bsx0WLuJxc+pXUI60Cn38Zgz7oTiz7jb+JnWfK4ExZwFoHtjlj2nKyREFP40aU5fHTe9W0RqPq5rgPIixcKpuZ4dY8xFPxYASloLS83HaAoe74dvVKdi0e/3MSaIhKF5rfkAHz8F4nwynjybkAVgGeQrcl39hBDu3u+M87rPQFMYIwqe38di60ExkFXvhv9tfLH72INmsqCJJZqMflhZAmp2UwBw7s8HnoKwT/9wGm0OravDBtKvhw0LQOaRsVWDbhoIyGijWVSEfefSyJEjLZ96VnhOrLCirXeJcOaHMRVImwGMYnZKkO/duqx2CG7o0KGZrTng5TNTfEjbJYbndtttN2sYq8JI23782GX0z5da2Q/JXzcCPFcK4ILmlBruc7EvUYmCDE1zDg/paDjnbhjnixXYsnK7WWIXBXaXwG5Eh/pjODSF0Pe1115rJkyYIOYqDxIm7vFJV1ZdxsgCkD06+LnEJoYMwfgAJMyfD+jG03PAzEo7/6HYZ8QHIAo55phjTEdHh0a3R7xwH4ADBw40p5xySvmhoRU2kIKWx2W4rNUEiPRHeXDuA4w0FWgKRvg0TI8sfF82WxZEbSUxp3L48OH2ExKNyAWAbDTazLYrmm4UvjgUWsMoc9ljyCmJzYwI8WrN6aZLmNa+bnjd8/ml62Tz/eqylWJwgQaA+KHREMA0TI8u+AjT67Ulj70lr20kyjWk7zJJ0kK1gqIAbIXwLidjv9Or47PNZAygKPAUNFp7oU09V0Aqjx7h0XOOWo6E911aOsUlj7MRRQGoU2darYtYrRayJUI1MGEN5431uN+7fIZzAAD4hUjvcVTQuEfOtTbTc60B9cj90Dn8GkdOLQ8Oy1ckb/NJHhukkA5DYQ2Kr0VD/6FyrDGUOLHvH3Ye9pabWbbaCDWXJWQHWbH33Hl+ODzYJIyG8GDqZfOA7AeNXahA5B6GMyv7mTuoxH32LE7aSWHQEGN+dqsx50lTx85V0h1XCEJNBMBAelSAcu2faxhHAAhxhM8/wrOQeL17CvgGDJGLxgh9oUP5MlFGQOpoFpHUYXBxkBE2/QITiHJ0yybER3lhLzJHMdbkWwCyrxx7tWkBEhHwhSYthhIqE/atb33LHHDAAbUogA6wMyzDxotauzFcw0KnM888s5Z57I477rjD7juIshSsPNyIESNyDk8tEf9k0DbGnCzjtlf+SLbElTFepteHCMAo6TlHQKOkgOKacH7waLjyu2F6r5eof62vyc5cZ8qUrcUlUuPERpDoFh25L2ys4EMpnXPOOYatV0KfW1B+ZDM0d7lsEsq+f0X2OGXJRNRddtnFlq3KcI8WgAgho2Uy6wopc453rN09Go/xRsDuA54HQBmuQnhJmK3tb1dRurbuIwV+8KXG7HOGLES/TT4RL4Cc/ILM35NOYyah2sXl0p0CAR5+Su61Ao57hOu1nhM+twQyFMi0LtLtt7xMfh0s64+3l3HjJeBomgCGr7+yQhnLp8byez58OfBQDvrz77vXjFFrReGG67kFYBGDMrbziPJS81CGNynPfQQAm8hMFX6zOaWWAXyUQwrV4+N9bRu144HaltkewckaqAcqX1ARf60GVNvLj6zXCiaM3VQPiKo6pWmEj/T9PGiamoeeY7EG0J9bO3FeprxwPvwyCKWInVmmbOD35Wp8C0AWnvz2t7+trXQLJaoRGIL597//HWLJhOFEsLs789GKQIhchu34MDM2haaDPepvxJ1JoMUXTG/yN35EcaEPVnd0dFhv3M0C9hdz3zT/3OM89MFqHAaGp1xegEK4X1votCU3rdA5W9PhSDInUisICp3NyNm3L4V23313+1UjyiNG5A+9+NO+Yvz9+vUzv/zlL+3zqndN2YI5SyKwFMmQGY1/S38yD60iQ39J+Yh9sFqG95Lix5hkY8bkZ5IJvDExDYfL3ikVKfjkPPhlIKvPKtITkEtfwJeTyQekpSsrxzszAkrbgDSXrSa84s7wwFuVb32TWyUPOfRE0AI0SgKeoA67ul5LA7BRBfXE69FASAOlAcib1mri7S+yO1qdXleUh151LUYj+cOeDOkwFAZvM7VtI/mLxbFOCEM47MTuGsWhCCiJB8KAVCASh1EJ1oSo8RuKq2F8arVDjHg3ft++fc2jjz5qR0Q0D9zH0GWdQncgnAV/nUYo3zwXcxdXWGGFzG0624cMGVK3Mxn9vPvuu+Z///tfJj5N7cMPP2wdBPdGKE+sKWEqFbvilyXyj3PD3o8Mi7rEqAfT+NwyBOhrrbVWfGGTCKzI3K6coSqCg2Eyn48oGbrnnnsqosAgvy/nF7/4RSYuFzJWWJHx4Vx82dIhx9sVnJAbbrghl6/rr78+l3//2fX6Bz/4QS5+mQDZJDQ5LU2z1cfbb789l+UTTzwxly+co3HjxuV4NcA2wbjVqSQRc6xlmo6QE0N8f3iORMrkK5epTg7w+7mKkg81i0X8/r0y+vbjtuKa2jrkiIXKC16tEUNpl7YBQ0J6wno00KgGLABDtVpMYIiXsBT7D5mh+ISH4sd44fcp9Eb6PK26DuUrFNaq9LqinFR9U65FvLbtpZrEoCxiVAWHVsnTpLANV72dEchM6GMypEuPOT+truEt46lhmOMMaT5jhYZ8nJ6iZ9W4NKvMO9Q8EY78kLlAmJt/5Z0yZUrhSJCmxfP6IyGki75T9AAvs4rIRz0daJr+kdEcyjCFyKuvb9JlnqBL4EpHfjQcPvLKc1kA8o1Z3eVemWJHvv3mEx4R+8qhxCLC/gvFZ9Pts88+204DUmDAu/baaxeJy9w77rjj7EtQlAcenBeAz3qleIDsKsDiGx8Aod3oN9hgA8MXAFzCVjv00EPtBFo3PHTO5prM58NDVcCjC1YrpmxIToGy8z1bdhQNfYbS1vT4tjA4qEd0mw0fPtzuxKD6RrdsZMnQq0tM7WIhmrsyDo+dT4KxgagFIN0CdZc1ulK9c1DvfyjZYym8pAZudtz3wQcfLExDb1JbU8gpxFw2Cj/FwWBWt/9JCYCAjBQiT6w29Ecu9thjj5TotnuMlY105TRKo0aNSooK6NiN1af1118/pwNmZPNtwQmyhNMlloVCs50TQm2mb7yrkNA5b3UzHidxkZFC5MmvaQF+CvhVvg9eDU89lq05U+TGBhn0uWY7AKYorYen8zTQA8Dpug7VHry9mAetplB/GbWf7wBQI4X6TVudn1bJC+mwnmxrA0pPtR2aSW2a6gltxX2aLob8VltttSRxLHxh7p02eTwLzyWjNLWwIkHYoHjSqgPkYNhfeOGFmYU+MRlsQeLbgDFehswuvvjimrOAs4EHyj56bjNIeMOfIJueONumsBOFPhfB9ALgAPB89Yih0B133LHuoADmhr8LRj3Z9r4ouiKrz3JDKHJzpoedf/75ZC9DsaE4MYozfFxceumlFbE1Ms8hTkFFDOIcbyiAOYqpehDw5UTIwqnKoEGDkmSIE1MR4z4nIxTA3Ec/X+IIVtCNT+jQ51166aWDOjj66KNzvNtss40vstS1jA9XmH/o50G+imDl2Ca42aEhEd4WKpOvkGfrN2llM0mtFOq3DMkJ9Y+G+GJhpFNvNVosblF4SIfUfNrdVRSXe9TI/grEenHK3O+xActoq4e35RrodgCkDypk7Ep9nlMOvK5NBQNxQ7y5yBKAsxBKK8QbqlGofVzbKxRPw1LTUf7UIzrwqYwO/Lhlr9F16Nk0X9YJCQlFeXROc0wtsJCcemEUEBlkLlkoo358OnZxTBjeUSJ/oaaSDnK2c3NBCF+oWWIkgjl9ChhkkifS8vsC+fat3yyRH+ZUukQT7sflPvmi49rVK6MuIRC78ho5Z3hwpZVWqskmTeYihnTQiPx6cUiH0S9eZtUt4EMHUBSAgI9hFfZccRVVL8Gy98kUnwXbZ5997GTGevHpbf/73/9uh/3cB8ID9olRDIaHlHgOCjk0yfWCCy4wYrDXlEScDpk4K/P8cl0xBx54oLn1VtlfxqF77703NxpEekz29YlRAIbNVK8cKaBm7Ug/Ha7RAcNz2vFLWoAiZSgyJK9sGJ9hY1UelYuWFxUC4VAUgGSSTYQ6I6MoP/WNpF8uddiQ2jJ1KOytt96yNZ6rYNIChH7eQt0X1HbscZNC1Eqpz5Air4injA6K5DR6D+BTicUoagPypqQ0iTHBZcJJR2uDMvFayas1hCszZgOq/eLyljlvNn6ZtLo6bxSAXT3jrc5f6AUgTJuNVqfXjLxYnmLhzaRF3HbJRXYPANGCUAiA1FShmrGdBVLNTfF/zFmJhRdLm3E3FJ9nDelgRqzmzqI2YEzsLbfcYrd7aKQQKGTpWU8esorlITX8oYceMrKAKDNPkTFXPkeFHeYSQ1OEaSFoM8m2EpAClOcOrTSTEQ/z9a9/3RUZPEcu47uyOCvjnQeZA4GYBTKSk7uDDcqwIVtxlB0/5pn4sceiT6xy4zvE6E11Qh6+8Y1vtOarSqLYCsMiknDmx/AJwyg+saLL5y1zLd8z80XabSJCwzWi0BxvmYDzzjsvmFfZAyZJTJmhOPnWXZJMmE477bRgvsrocWbzyoexk5+3iLF0E+zPWRNFlKJm45dJDO/Vbz7wCrWWqyerzFBcmVpHCqRe0l36Pr0Dvl4bzXBpADaaUE+8Hg2ENDBbArAdc/xCyp2Vw1rVkpV2Qrq7UumFx1B3R04wrhmuYtuQmUW8FIzyYODTROMUcGR4b9KkSQ1ni+dkTmGRiaBOCPsj8gWCeoS+ZHcGK7PInICP5xo8eHB0lGe2AyBTtIYNG5axA1HUSSedZH74wx/W033b7jPidN1119lloApAXhY89otl8mqjtMMOOxiGGesBEPnDhw83p59+et2kmCnOB871ZYlF4Dlk7qFdbLXyyisH2WY7AKIUnAufUOrMJGoh1iD7kyr8YcCyeSQ+zWVKkxla7xxLL3WuJeuiecFjNFvagCFlAICZTe6sHfLCdVETl5LfMvHL8KakDU89b3mWBmBqd0uRMn1QxHjLADhU0LFaIhYey0dXDC8qh27XBFMgNJcUYlGh89ChuXhlCgj5zHzx0yF9HxjYWKFmiWbNLwBtFl25salYNJ0hGe5zIAd9hPLl8jVyTt5JX9OIyeA+k0p8W5N8YfJQFvricUQmtWO3A+CYMWPM8ccfb7At3AL0FYPimGfoA8XnK7pmpRtzD/1akG8bs9rOpfvuuy+3hQbgkVGmzLfxiMNnydZdd91M/vEWffuPZ2BrDj787YPYTRs9oA/0wvBjK4nNJU899VTrxSqAQvLJH5/vwuFxiUm+Bx10kH2RNT5lcsQRR5hdd921+wGQmcsyDBSsbdwHb8U5gKh9TsARGJrQynzCkfI1eZcAhj9zmvt096R0+RCfGdkpS1OpfdnHptXEzGU86aIXQNMMgZ+ajy4bn4YOHWqDup0NSLUda678h2zXtV8jxtIhn0W1dCxeI+E0c6n5KiOf2irUaxCSUWb+KF04ULcDYOjBe8K6rwZKA7BZw77Z/jbe8lCz1mwRlKmpUmsE1io3Y4OWeSacpZBuQ45RGbnIDC1BCMkIpR/iI0xry9JOCPaAekUx4bFwCqOZbdyQy5CZrODP7KMXSo8qni3EZLeADAjwQFlUhG2j4MC+ASwY2wpEDGYWzjDvze8MZt6f70SE8kA8Vr/5dP/99xvZ5LvWR0Y+mItIvtBtPWK13sUyOqL5UuN+iy22MJtttlntuQhnQZJPOAYsOGODSZ4dPn7IY7FUDRzTm0n0AqEb5cORwklzCXv5yCOPrOnQveee87zsp2hJBJaaDwh/q4nPRrVjPiDzCcVmzMy9k+lYwc9UhT7VJcZ/RWrbVj9uRQo0kycpiIo4JRVZ2pmUluzjl4svO5FWZKVeUvzx48dXZBloToYMR+bik5bYshleeUkq8uHwHG8jAaWbYBfJ3fVcFJWUda0Nk5ibZCqTVog3FFaUpTL8Pi/XflhRWkX3ZmkAxoAWC/cV1Solp8htNi3ipz4X+UlND5k+r3/tP1+Z6ygASURd5TICG+ElnVY+lOYBmX7XBPZNakERX+0sldmKY73x0VakUSSD9P0RC/jVJi6K2+p7USeEgsLYpQBTC6yRzFHIjFio4VtPBl44RnQ9ZSEXXjp8XRDi0aW+WORp4sSJdoTC1QGbqvuTWvE26YyuR+TL3bC7Hn+z9+kxQF/akUz6fNeYeYKcK/F8/qe39F4zR3TP4AG61PQoO76qYMsiJhxQ4OlQA7jKj/E3Gk6mFOwpMuhtl4VRdjPJIn7k4rHjBavy4ec8NJIRkgX42NpCPUXlYQsP35u/++67zSGHHKIs0SP5AhCdRTfddJPtNdDC58gcPdkTsrY9BnmhjEMee7P5BHz777+/meCs5COtE0880TAaEq0B6dNhSV5XI95odj5N2UuPbgE2J2qU0MEzzzyTi864q0+E+ZsT+Twz45quFv8ZeOHZoKhoy4xW5ZW00IsLQGRrKxC1AVuVgVbL4Q1OtcvgdZvfVuXFrVFVZihM783MYyhfmCAhG7Ad+YyVl+ar2wGwHUrqkTnzNGABSDXZFSmUL2q01KG4MsOGZXhDtUcorIxOeaZUWztUqxM/FB7SIaM+ZdLy9Y3DFUor9LykE9o+WfNlbcBtt93WzlsLCZhZYWR86623ziXP/DTmnKUABvtPq/qcIC9g3333tR9h9oKDl6xe84kw5v41SqwH8T3rmCymZ/lpMfcQ3fg0ZMgQI99drnmg3MfbxQtNIXR40UUXZZpsunFSd+9nyPOMM87IOY06zW0OKei0YYGU3Pbw9GigpAb+H8Q1BFnhZSPWAAAAAElFTkSuQmCC" alt="">
											</a>
									</div>
							</div>
						</div>
						<div class="screen-out clearfix">
								<div class="newservice">
										<h2>分类</h2>
										<ul class="service-bd">
												<li v-for="(item,index) in goodsCategory" :key="index">
														<i :class="`iconfont ${item.icon}`"></i>
														<span class="" v-for="(item2,index2) in item.data" :key="index2">
																<span>{{item2}}</span>
																<span v-if="index2!==(item.data.length-1)" class="bias">/</span>
														</span>
												</li>
										</ul>
								</div>
								<div class="main">
										<div class="mainNav">
												<ul>
														<li>
																<a href="https://www.tmall.com" style="color: #ff0036;">天猫</a>
																<div class="pipe">|</div>
														</li>
														<li>
																<a href="https://pages.tmall.com/wow/a/act/ju/dailygroup/16583/17068/wupr?wh_pid=daily-523760&disableNav=YES&status_bar_transparent=true" style="color: #ff0036;">聚划算</a>
																<div class="pipe">|</div>
														</li>
														<li>
																<a href="https://chaoshi.tmall.com" style="color: #33c900;">天猫超市</a>
																<div class="pipe">|</div>
														</li>
														<li>
																<a href="https://sf.taobao.com">司法拍卖</a>
																<div class="pipe">|</div>
														</li>
														<li>
																<a href="https://www.fliggy.com" >飞猪旅行</a>
																<div class="pipe">|</div>
														</li>
														<li>
																<a href="https://pages.tmall.com/wow/a/act/tiantian/dailygroup/2391/wupr?wh_pid=daily-231043" >天天特卖</a>
																<div class="pipe">|</div>
														</li>
														<li>
																<a href="https://taolive.taobao.com/explore/index.html?isEntertainment=true" >淘宝直播</a>
																<!-- <div class="pipe">|</div> -->
														</li>
												</ul>
										</div>
										<div class="main-inner">
												<div class="bannerbox">
														<Banner :width='564' :height="315" :bannerImg="bannerImg" :isHoverShow="true"/>
												</div>
												<div class="userBox">
														<div class="memberBt">
																<img src="https://wwc.alicdn.com/avatar/getAvatar.do?userNic…&width=60&height=60&type=sns&_input_charset=UTF-8" alt="">
																<span>Hi! 你好</span>
														</div>
														<div class="memberFt">
																<button>登录</button>
																<button>注册</button>
																<button>开店</button>
														</div>
														<div class="userMy">
																<div class="userMyItem" v-for="(item,index) in userMyItem" :key="index">
																		<i :class="`iconfont ${item.icon}`"></i>
																		<span>{{item.text}}</span>
																</div>
														</div>
														<div class="userMod">
																<ScrollText :data="scrollText" :width="252" :height="18"/>
														</div>
												</div>
										</div>
										
								</div>
						</div>
						<div class="h3">
								<span>猜你喜欢</span>
								<img src="https://gw.alicdn.com/imgextra/i2/O1CN016b1mMM1FxJlsXfWhU_!!6000000000553-2-tps-96-30.png" alt="">
						</div>
						<div class="goods">
								<div class="goodsItem" v-for="(item,index) in goods" :key="index">
										<a :href="`https:${item.click_url}`">
												<img :src="`https://gw.alicdn.com/bao${item.pict_url.split('bao')[1]}`" alt="">
												<div class="information">
														<span class="title">{{ item.title }}</span>
														<div class="tagsList">
																<div class="tags" v-for="(item2,index2) in item.icons" :key="index2">{{item2.text}}</div>
														</div>
														<span class="price"><span style="font-size: 14px;">¥</span>&nbsp;{{item.real_wap_price}}</span>
												</div>
										</a>
								</div>
						</div>
					</div>
					<img class="decorations-item2" src="https://img.alicdn.com/imgextra/i1/O1CN01dkfyT21w2YKd6poBo_!!6000000006250-2-tps-360-800.png" alt="">
					<!-- <div ></div> -->
				</div>
    </div>
</template>
<script setup>
import {ref, onMounted
} from 'vue'
import HoverSelect from '../../components/hoverSelect.vue'
import Banner from '../../components/banner.vue'
import ScrollText from '../../components/scrollText.vue'
import goods from '../../data.ts'
const options = ref([
    {
        label:'全球',
        value:1
    },
    {
        label:'中国大陆',
        value:2
    },
    {
        label:'中国香港',
        value:3
    },
    {
        label:'中国台湾',
        value:4
    },
    {
        label:'韩国',
        value:5
    },
    {
        label:'日本',
        value:6
    },
    {
        label:'美国',
        value:7
    },
    {
        label:'俄罗斯',
        value:8
    },
])
const options2 = ref([
    {
        label:'我买到的宝贝',
        value:1
    },
    {
        label:'我的足迹',
        value:2
    },
])
const options3 = ref([
    {
        label:'收藏的宝贝',
        value:1
    },
    {
        label:'收藏的店铺',
        value:2
    },
])
const options4 = ref([
    {
        label:'开店入驻',
        value:1
    },
    {
        label:'已卖出的宝贝',
        value:2
    },
    {
        label:'出售中的宝贝',
        value:3
    },
    {
        label:'卖家服务市场',
        value:4
    },
    {
        label:'卖家培训中心',
        value:5
    },
    {
        label:'体检中心',
        value:6
    },
    {
        label:'电商学习中心',
        value:7
    },
])
const options5 = ref([
    {
        label:'消费者客服',
        value:1
    },
    {
        label:'卖家客服',
        value:2
    },
    {
        label:'意见反馈',
        value:3
    },
    {
        label:'网页版旺旺',
        value:4
    },
])
const options6 = ref([
    {
        label:'天猫',
        value:1
    },
    {
        label:'店铺',
        value:2
    },
])
const goodsCategory = ref([
    {
        icon:'icon-nvzhuang',
        data:['女装','内衣','奢品']
    },
    {
        icon:'icon-nvxie',
        data:['女鞋','男鞋','箱包']
    },
    {
        icon:'icon-a-meizhuangxihu3x',
        data:['美妆','饰品','洗护']
    },
    {
        icon:'icon-a-nanzhuang3x',
        data:['男装','运动','百货']
    },
    {
        icon:'icon-shouji',
        data:['手机','数码','企业礼物']
    },
    {
        icon:'icon-jiazhuang',
        data:['家装','电器','车品']
    },
    {
        icon:'icon-a-shipinshengxian3x',
        data:['食品','生鲜','母婴']
    },
    {
        icon:'icon-chongwuyiliao',
        data:['医药','保健','进口']
    },
])
const bannerImg = ref([
    {
        img:'https://img.alicdn.com/imgextra/i2/O1CN01jH9w4F1sEDtCgpH3r_!!6000000005734-0-tps-846-472.jpg',
        a:'https://pages.tmall.com/wow/a/act/tmall/dailyact/16403/16846/wupr?wh_pid=dailyAct-504674&disableNav=YES&status_bar_transparent=true&scm=1007.home_pc.banner.activity&spm=a21bo.jianhua.banner.1&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D'
    },
    {
        img:'https://img.alicdn.com/imgextra/i4/O1CN01LHWdyp1yvAidcNMDR_!!6000000006640-0-tps-846-472.jpg',
        a:'https://pages.tmall.com/wow/a/act/tmall/dailyact/17406/17973/wupr?wh_pid=dailyAct-495621&disableNav=YES&status_bar_transparent=true&scm=1007.home_pc.banner.activity&spm=a21bo.jianhua.banner.2&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D'
    },
    {
        img:'https://img.alicdn.com/imgextra/i4/O1CN01cmWoxh1S6H07yrmcM_!!6000000002197-0-tps-846-472.jpg',
        a:'https://pages.tmall.com/wow/an/cs/act/wupr?wh_biz=tm&wh_pid=act%2F18870a468e0&disableNav=YES&scm=1007.home_pc.banner.activity&spm=a21bo.jianhua.banner.3&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D'
    },
    {
        img:'https://img.alicdn.com/imgextra/i4/O1CN01LHWdyp1yvAidcNMDR_!!6000000006640-0-tps-846-472.jpg',
        a:'https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?acm=lb-zebra-34359-425732.1003.4.5460841&scm=1007.home_pc.banner.activity&spm=a21bo.jianhua.banner.4&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D'
    },
    {
        img:'https://img.alicdn.com/imgextra/i2/O1CN01lFNk4Z1JDkviZe8EG_!!6000000000995-2-tps-846-472.png',
        a:'https://pages.tmall.com/wow/a/act/tmall/dailyact/16403/16846/wupr?wh_pid=dailyAct-504674&disableNav=YES&status_bar_transparent=true&scm=1007.home_pc.banner.activity&spm=a21bo.jianhua.banner.1&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D'
    },

])
const userMyItem = ref([
    {
        icon:'icon-baobeishoucang',
        text:'宝贝收藏'
    },
    {
        icon:'icon-shoutibao',
        text:'买过的店'
    },
    {
        icon:'icon-shangcheng',
        text:'收藏的店'
    },
    {
        icon:'icon-jiazhuang',
        text:'我的足迹'
    }
])
const scrollText = ref([
    {
        title:'规则',
        main:'2024年1月淘宝重要新规速递'
    },
    {
        title:'规则',
        main:'2024年2月淘宝重要新规速递'
    },
    {
        title:'规则',
        main:'2024年3月淘宝重要新规速递'
    },
    {
        title:'规则',
        main:'2024年4月淘宝重要新规速递'
    },
])
const goodsList = ref(goods)
function selectItem(item){
    console.log(item)
}
function selectItem2(item){
    console.log(item)
}
function selectItem3(item){
    console.log(item)
}
onMounted(()=>{
    console.log(goods)
})


</script >
<style lang="scss" scoped>

.clearfix::after,
.clearfix::before{
    content: '';
    clear: both;
    display: block;
}
.nav{
    width: 100%;
    background-color: #f5f5f5;
}
.nan{
    min-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    ul{
        margin: 0;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #6C6C6C;
        float: left;
        height: 35px;
        padding: 0;
        li{
            list-style: none;
            height: 35px;
            // line-height: 35px;
            display: flex;
            align-items: center;
            margin-right: 12px;
            cursor: pointer;

            &.red{
                color: #f22e00;
            }
            &:hover{
                color: #f22e00;
            }
        } 
    }
    .ul2{
        float: right;
    }
}
.tbh-superbanner{
    background: url(https://img.alicdn.com/imgextra/i1/O1CN01O3IANn1t5LuCN17gR_!!6000000005850-0-tps-1190-100.jpg) top center no-repeat;
    background-color: #ff1e1f;
    .superbanner-inner{
        display: block;
        overflow: hidden;
        height: 100px;
        width: 1200px;
        margin: 0 auto;
        min-width: 1200px;
        position: relative;
    }
}
.search-decorations{
    background-color: #fff;
    width: 1200px;
    margin: 0 auto;
    border-radius: 18px 18px 0 0;
    display: flex;
    .taobaopng{
        flex: 1.3;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            display: block;
        }
    }
    .inputBox{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 4;
        .inputwrap{
            width: 738px;
            background: #FFF;
            border-radius: 100px;
            border: 2px solid #FF5000;
            display: flex;
            .inputwrapLeft{
                flex: 1;
                height: 38px ;
                font-size: 14px;
                padding-left: 10px;
                display: flex;
                align-items: center;
                .hr{
                    width: 0;
                    height: 70%;
                    border-left: 1px solid #dfdfdf;
                }

            }
            .inputwrapMiddle{
                flex: 6;
                input{
                    width: 100%;
                    height: 36px;
                    border: 0;
                    outline: none;
                }
            }
            .inputwrapRight{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    width: 98%;
                    height: 94%;
                    font-size: 18px;
                    font-weight: 700;
                    cursor: pointer;
                    border: none;
                    color: #fff;
                    border-radius: 30px;
                    font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
                    background: #ff5000;
                    background-image: linear-gradient(145deg,#ff9000,#ff5000 77%);
                }
            }
        }
        .searchHot{
            width: 100%;
            padding: 10px 25px;
            box-sizing: border-box;
            span{
                white-space: nowrap;
                color: #666 !important;
                margin-right: 8px;
            }
        }
    }
    .qrBox{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .qr{
            border: 1px solid rgba(238,238,238);
            a{
                cursor: pointer;
                display: flex;
                flex-direction: column;
                padding: 0 8px 8px 8px;
                text-decoration: none;
                span{
                    text-align: center;
                    line-height: 20px;
                    margin: 0 auto 4px;
                    color: #ff5000;
                    font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
                }
                img{
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }
}
.all{
	// display: flex;
	width: 100%;
	.centerBox{
		width: 1200px;
		min-width: 1200px;
		float: left;

	}
}
.decorations-item {
	width:calc((100% - 1200px)/2) ;
	float: left;


	// height: 1000px;
}
.decorations-item2 {
	width:calc((100% - 1200px)/2) ;
	float: left;

	// height: 1000px;
}
.screen-out{
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    
    .newservice{
        margin: 24px 0 0 24px;
        position: relative;
        font-size: 14px;
        background-color: #F7F9FA;
        width: 270px;
        border-radius: 12px;
        float: left;
        h2{
            padding: 16px 0 0 20px;
            font-size: 18px;
            color: #111;
            letter-spacing: 0;
            line-height: 24px;
            margin: 0;
        } 
        .service-bd{
            padding: 16px 0 8px 20px;
            border-top: none;
            list-style: none;
            li{
                overflow: hidden;
                line-height: 20px;
                height: 20px;
                position: relative;
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 18px;
                width: 212px;
                color: #666;
                cursor: pointer;
                i{
                    margin-right: 12px;
                    display: inline-block;
                    font-size: 16px;
                    width: 16px;
                    height: 16px;
                }
                .bias{
                    height: 20px;
                    overflow: hidden;
                    width: 7px;
                    padding: 0 8px;
                }
                &:hover{
                    color:#ff5000 ;
                }
            }
        }
    }
    .main{
        margin-left: 20px;
        .mainNav{
            height: 42px;
            position: relative;
            color: #000;
            background-color: #F7F9FA;
            border-radius: 12px;
            margin: 24px 26px 0 0;
            width: 856px;
            overflow: hidden;
            ul{
                margin-left: 17px;
                font-size: 16px;
                line-height: 16px;
                padding-top: 13px;
                display: flex;
                li{
									display: flex;
                    a{
                           padding: 0 20px;
                           color: #333;
                           &:hover{
                            color: #ff5000 !important;
                           }
                    }
                    
                }
            }
        }
        .main-inner{
            margin-top: 10px;
            display: flex;
            :deep(.banner){
                width: 564px;
                height: 315px;
                a{
                    width: 564px;
                    height: 315px;
                    img{
                        width: 100%;
                        height:100%;
                    }
                }
            }
            .userBox{
                width: 100%;
                padding:0 30px;
                position: relative;
                .memberBt{
                    color: #3C3C3C;
                    font-size: 16px;
                    // margin: ;
                    img{
                        display: block;
                        margin: 0 auto;
                        margin-top: 22px;
                        border-radius: 50%;
                    }
                    span{
                        display: block;
                        text-align: center;                        
                        margin-top: 22px;
                    }
                }
                .memberFt{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 13px;
                    button{
                        width: 80px;
                        height: 42px;
                        border-radius: 21px;
                        font-size: 16px;
                        color: #fff;
                        border: 0;
                        &:nth-child(1){
                            background-image: linear-gradient(to right, #ff5000 0, #ff6000 100%);
                        }
                        &:nth-child(2){
                            background-image: linear-gradient(to right, #ff9000 0, #ff7000 100%);
                        }
                        &:nth-child(3){
                            color: #FF5000;
                            border: 1px solid #FF915E;

                        }
                    }
                }
                .userMy{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 30px;
                    .userMyItem{
                        cursor: pointer;
                        i{
                            display: block;
                            font-size: 24px;
                            text-align: center;
                        }
                        &:hover{
                            color: #ff5000;
                        }
                    }
                }
                .userMod{
                    position:absolute;
                    bottom: 0px;
                    left: 32px;
                }
            }
        }
    }
    
}
.h3{
    margin: 0 auto;
    width: 1200px;
    padding: 20px 19px;
    box-sizing: border-box;
    display: flex;
    align-items: end;
    color: #111;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    img{
        height: 20px;
        margin: 0 0 0 6px;
    }
    span{
        line-height: 1;
    }
}
.goods{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1200px;
    padding: 0  0 0 15px;
    box-sizing: border-box;
    .goodsItem{
        padding: 11px;
        background-color: #f7f9fa;
        border: 1px solid #f7f9fa;
        height: 174px;
        box-sizing: border-box;
        width: 32%;
        margin-right: 15px;
        margin-bottom: 20px;
        border-radius: 10px;
        a{
            display: flex;
            width: 100%;
            height: 100%;
            img{
                height: 100%;
                border-radius: 10px;
            }
            .information{
                width: 100%;
                padding-left: 10px;
                position: relative;
                .title{
                    display: inline-block;
                    max-height: 46px;
                    margin: 6px 0 2px 0;
                    overflow: hidden;
                    color: #333;
                    font-size: 16px;
                    line-height: 23px;
                    &:hover{
                        color: #ff5000;
                    }
                }
                .tagsList{
                    height: 20px;
                    overflow: hidden;
                    .tags{
                        display: inline-block;
                        height: 20px;
                        margin-right: 6px;
                        padding: 0 4px;
                        font-size: 12px;
                        line-height: 18px;
                        vertical-align: top;
                        border: 1px solid #ff5000;
                        border-radius: 3px;
                        color: #FF5000;
                        border-color: #FAB596;
                        background: #FFFFFF;
                    }
                }
            }
            .price{
                display: inline-block;
                font-size: 22px;
                line-height: 22px;
                color: #ff5000;
                position: absolute;
                bottom: 0;
                left: 10px;
            }

        }
        &:hover{
            border-color: #ff5000;
        }
    }
}

</style>