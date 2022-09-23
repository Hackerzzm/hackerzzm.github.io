import React, { FC } from 'react';

export const Info: FC = () => {
    return (
        <>
            <p>
                <span id="busuanzi_container_site_pv">
                    累计访问：<span id="busuanzi_value_site_pv"></span>次
                </span>
            </p>
            <p>
                bgm素材：
                <a
                    href="https://www.bilibili.com/video/BV1zs411S7sz/"
                    target="_blank"
                    rel="noreferrer"
                >
                    洛天依，言和原创《普通DISCO》
                </a>
                、
                <a
                    href="https://music.163.com/#/song?id=1847408145"
                    target="_blank"
                    rel="noreferrer"
                >
                    月亮代表我的心
                </a>
            </p>
            <p>
                玩法来源➡️羊了个羊➡️
                <a
                    href="https://play.google.com/store/apps/details?id=tile.master.connect.matching.game"
                    target="_blank"
                    rel="noreferrer"
                >
                    3 Tiles
                </a>
            </p>
        </>
    );
};
