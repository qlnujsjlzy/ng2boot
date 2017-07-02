package com.github.qlnujsjlzy.weicamps.wechat.controller;

import com.github.qlnujsjlzy.weicamps.wechat.utils.JsonUtils;
import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.menu.WxMpGetSelfMenuInfoResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 手动创建自定义菜单
 *
 * @Author licy13
 * @Date 2017/5/13
 */
@RestController
@RequestMapping("/manual/menu")
public class WechatMenuController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private WxMpService wxService;

    @GetMapping(path = "create")
    public String createConditionalMenu() throws WxErrorException {
        String json = "{\n" +
                " 	\"button\":[\n" +
                "	{ \n" +
                "		\"name\":\"网购订餐\",\n" +
                "		\"sub_button\":[\n" +
                "		{	\n" +
                "			\"type\":\"view\",\n" +
                "			\"name\":\"预订桌位\",\n" +
                "			\"url\":\"http://lenovo-licy13.tunnel.qydev.com/\"\n" +
                "		},\n" +
                "		{\n" +
                "			\"type\":\"view\",\n" +
                "			\"name\":\"在线点餐\",\n" +
                "			\"url\":\"http://lenovo-licy13.tunnel.qydev.com/\"\n" +
                "		}]\n" +
                "  },\n" +
                "  { \n" +
                "		\"name\":\"微营官网\",\n" +
                "		\"sub_button\":[\n" +
                "		{	\n" +
                "			\"type\":\"view\",\n" +
                "			\"name\":\"微营官网\",\n" +
                "			\"url\":\"http://lenovo-licy13.tunnel.qydev.com/\"\n" +
                "		},\n" +
                "		{\n" +
                "			\"type\":\"view\",\n" +
                "			\"name\":\"联系我们\",\n" +
                "			\"url\":\"http://lenovo-licy13.tunnel.qydev.com/\"\n" +
                "		}]\n" +
                "  },\n" +
                "  { \n" +
                "		\"name\":\"会员特权\",\n" +
                "		\"sub_button\":[\n" +
                "		{	\n" +
                "			\"type\":\"view\",\n" +
                "			\"name\":\"会员优惠\",\n" +
                "			\"url\":\"http://lenovo-licy13.tunnel.qydev.com/\"\n" +
                "		},\n" +
                "		{\n" +
                "			\"type\":\"view\",\n" +
                "			\"name\":\"我的会员卡\",\n" +
                "			\"url\":\"http://lenovo-licy13.tunnel.qydev.com/\"\n" +
                "		}]\n" +
                "  }] \n" +
                "}";

        String menuId = wxService.getMenuService().menuCreate(json);
        logger.info("\n menuId={}", menuId);
        return menuId;
    }

    @GetMapping(path = "/get")
    public String testGetSelfMenuInfo() throws Exception {
        WxMpGetSelfMenuInfoResult selfMenuInfo = this.wxService.getMenuService().getSelfMenuInfo();
        logger.info("\n selfMenuInfo={}", selfMenuInfo.toString());
        return selfMenuInfo.toString();
    }

    @GetMapping(path = "/delete")
    public void testMenuDelete() throws WxErrorException {
        this.wxService.getMenuService().menuDelete();
    }
}
