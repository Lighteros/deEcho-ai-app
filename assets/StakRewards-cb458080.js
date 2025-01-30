import {
  a2 as A,
  a3 as S,
  a4 as i,
  a5 as I,
  a6 as N,
  a7 as _,
  a8 as O,
  a9 as y,
  aa as c,
  ab as e,
  ac as f,
  ad as P,
  ae as l,
  af as E,
  ag as V,
  ah as v,
  ai as B,
  aj as F,
  ak as H,
  al as T,
  am as L,
  an as U,
  ao as Y,
} from "./index-5ce6b57e.js";
const $ = [
    {
      inputs: [
        { internalType: "address", name: "_rewardsToken", type: "address" },
        { internalType: "address", name: "_stakingToken", type: "address" },
        { internalType: "address", name: "_ido", type: "address" },
        { internalType: "uint256", name: "startTime", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: !0,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Recovered",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: "uint256",
          name: "reward",
          type: "uint256",
        },
      ],
      name: "RewardAdded",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: "address", name: "user", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "reward",
          type: "uint256",
        },
      ],
      name: "RewardPaid",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: "uint256",
          name: "newDuration",
          type: "uint256",
        },
      ],
      name: "RewardsDurationUpdated",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: "address", name: "user", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Staked",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: "address", name: "user", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Withdrawn",
      type: "event",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "earned",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "exit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getReward",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getRewardForDuration",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "ido",
      outputs: [
        { internalType: "contract IDechatIDOClaim", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lastTimeRewardApplicable",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lastUpdateTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
      name: "notifyRewardAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "payed",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "periodFinish",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "tokenAddress", type: "address" },
        { internalType: "uint256", name: "tokenAmount", type: "uint256" },
      ],
      name: "recoverERC20",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardPerToken",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardPerTokenStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "rewards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardsDuration",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardsToken",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_rewardsDuration", type: "uint256" },
      ],
      name: "setRewardsDuration",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "stake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "stakeRelease",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "stakingToken",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "userRewardPerTokenPaid",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "viewStake",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "APY", type: "uint256" },
            {
              internalType: "uint256",
              name: "CHATAmountofpool",
              type: "uint256",
            },
            { internalType: "uint256", name: "mystake", type: "uint256" },
            { internalType: "uint256", name: "myrewards", type: "uint256" },
            {
              internalType: "uint256",
              name: "youhaveclaimed",
              type: "uint256",
            },
            { internalType: "uint256", name: "youcanclaim", type: "uint256" },
          ],
          internalType: "struct DeEchoStaking.ViewStake",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  s = (u) => (L("data-v-6db2d895"), (u = u()), U(), u),
  j = { class: "stakeBox" },
  q = s(() =>
    e(
      "div",
      { class: "title_stak" },
      [e("h2", null, "staking for rewards")],
      -1
    )
  ),
  z = { class: "data_contentx" },
  W = { class: "stak_left" },
  G = { class: "sta_titles" },
  J = { class: "button_s" },
  K = { class: "data_item" },
  Q = s(() => e("div", null, "token", -1)),
  X = { class: "data_item" },
  Z = s(() => e("div", null, "APR", -1)),
  ee = { class: "data_item" },
  te = s(() => e("div", null, "staking period", -1)),
  ne = { class: "stak_right" },
  ae = ["onClick"],
  se = { class: "staingModalBox" },
  ie = { class: "imgboxs" },
  ue = ["src"],
  oe = { class: "stacontents" },
  pe = s(() =>
    e("h3", null, "Please pay attention to the security of funds", -1)
  ),
  de = s(() =>
    e(
      "div",
      { class: "tip_text" },
      [
        Y(
          " Recently, phishing websites have frequently disguised and counterfeited real website urls to defraud users of Token transfer rights, resulting in the theft of user funds. "
        ),
        e(
          "span",
          null,
          "Please ensure that the current link is secure and carefully made."
        ),
      ],
      -1
    )
  ),
  re = { class: "selectbox" },
  le = { class: "selct_cousten" },
  ye = s(() =>
    e("span", { class: "radio-label" }, "Prompt For Next Entry", -1)
  ),
  ce = { class: "btntwos" },
  me = ["disabled"],
  we = 56,
  _e = {
    __name: "StakRewards",
    setup(u) {
      const { address: b } = S(),
        h = "0x35Dfb0BD656d24637D8f1D167fa79Ec9808394eE";
      i(window.sessionStorage.getItem("userId"));
      const m = i([
          {
            name: "Data Mining",
            token: "DeEcho",
            apr: "N/A",
            period: "18 Days",
            link: "https://www.dechat.io/mining",
          },
          {
            name: "Stake 7-60 Days",
            token: "DeEcho",
            apr: "15% - 25%",
            period: "7-60 Days",
            link: "https://www.dechat.io/staking",
          },
          {
            name: "Stake 365 Days",
            token: "DeEcho",
            apr: "N/A",
            period: "365 Days",
            link: "https://www.dechat.io/pool",
          },
        ]),
        w = i(""),
        o = i(!1),
        p = i("");
      i(!1),
        I(() => {
          k();
        });
      const k = async () => {
          let n = await N({
              address: h,
              abi: $,
              functionName: "viewStake",
              chainId: we,
              args: [b],
              watch: !0,
            }),
            t = new _(n.CHATAmountofpool).div(new _(10).pow(18)).toFixed(4);
          m.value[2].apr = Number(t) === 0 ? "N/A" : M((5e5 / t) * 100) + "%";
        },
        g = (n) => {
          p.value = n;
        },
        d = () => {
          (o.value = !1), (p.value = "");
        },
        M = (n) => {
          if (n * 1 === 0) return 0;
          let t = (n + "").split(".");
          if (t.length === 2) {
            let r = t[0] + "." + t[1].substring(0, 2);
            return r === "0.00" ? "0" : r;
          } else return n;
        },
        x = () => {
          T(() => {
            window.open("https://www.deechoai.cc/home", "_blank"), d();
          });
        },
        D = () => {
          T(() => {
            window.open(w.value, "_blank"), d();
          });
        },
        C = (n) => {
          (o.value = !0), (w.value = n);
        };
      return (n, t) => {
        const r = O("el-dialog");
        return (
          y(),
          c(
            f,
            null,
            [
              e("div", j, [
                q,
                e("div", z, [
                  (y(!0),
                  c(
                    f,
                    null,
                    P(
                      m.value,
                      (a, R) => (
                        y(),
                        c("div", { class: "stak_items", key: R }, [
                          e("div", W, [
                            e("div", G, l(a.name), 1),
                            e("div", J, [
                              e("div", K, [Q, e("div", null, l(a.token), 1)]),
                              e("div", X, [Z, e("div", null, l(a.apr), 1)]),
                              e("div", ee, [
                                te,
                                e("div", null, l(a.period), 1),
                              ]),
                            ]),
                          ]),
                          e("div", ne, [
                            e(
                              "button",
                              {
                                class: "comm_btns",
                                onClick: (fe) => C(a.link),
                              },
                              "Stake",
                              8,
                              ae
                            ),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              E(
                r,
                {
                  modelValue: o.value,
                  "onUpdate:modelValue": t[1] || (t[1] = (a) => (o.value = a)),
                  width: v(H) ? "50%" : "96%",
                  "before-close": d,
                },
                {
                  default: V(() => [
                    e("div", se, [
                      e("div", ie, [
                        e("img", { src: v(B), alt: "" }, null, 8, ue),
                      ]),
                      e("div", oe, [
                        pe,
                        e("div", { class: "s_titles", onClick: x }, "DeEcho"),
                        de,
                        e("div", re, [
                          e("div", le, [
                            e(
                              "div",
                              {
                                class: "custom-radio",
                                onClick: t[0] || (t[0] = (a) => g("option1")),
                              },
                              [
                                e(
                                  "div",
                                  {
                                    class: F([
                                      "radio-checkmark",
                                      { checked: p.value === "option1" },
                                    ]),
                                  },
                                  null,
                                  2
                                ),
                                ye,
                              ]
                            ),
                          ]),
                          e("div", ce, [
                            e("button", { onClick: d }, "Stay out"),
                            e(
                              "button",
                              {
                                type: "primary",
                                disabled: p.value !== "option1",
                                onClick: D,
                              },
                              " Continue ",
                              8,
                              me
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "width"]
              ),
            ],
            64
          )
        );
      };
    },
  },
  Te = A(_e, [["__scopeId", "data-v-6db2d895"]]);
export { Te as default };
