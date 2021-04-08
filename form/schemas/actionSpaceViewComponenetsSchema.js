var brand = {
    name: 'div',
    content: {
        name: 'a',
        'href': '#welcome',
        class:'container align_center',
        logo: {
            'name': 'img',
            'id': 'logo',
            'src': 'images/ehh3dlowres.png',
        },
        text: {
            name: 'span',
            class:'brandTitle',
            innerHTML:`everything happens here`
        }
    },   
}
var signupModelV2 = {
    formSection: {
        name: 'section',
        class: 'container row',
     
        form: {
            id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class:'column align_center',
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'Sign Up',
                },
                item0: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        icon: {
                            name: 'i', 'class': "material-icons", 'textContent': 'add_box',
                        },
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with google',
                        },

                    },
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelUsername': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'username',
                        'textContent': 'Username',
                    },
                    'inputUsername': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'username',
                        'required': 'true',
                        'placeholder': 'Enter Username',
                    }
                },
                item2:{
                    name: 'li',
                    class: 'full-width item column',
                    'labelPassword': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'password',
                        'textContent': 'Password',
                    },
                    'inputPassword': {
                        'name': 'input',
                        'type': 'password',
                        'id': 'password',
                        'required': 'true',
                        'placeholder': 'Enter Password',
                    }
                },
                item3:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'SIGN UP',
                        },
                    'data-command': `[{"command":"Signup"}]`,
                    },
                },
                item4: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with email',
                        },
                      

                    },
                },
                item5: {
                    name: 'li',
                    class: 'full-width item',
                    'textMessage': {
                        'name': 'div',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            class:'small',
                            'textContent': 'By signing up, you agree to the Terms of Service and Privacy Policy.',
                        },

                    },
                },

            }

        }
    }
}
var loginModelV2 = {
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
            id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'log in',
                },
                item0: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        icon: {
                            name: 'i', 'class': "material-icons", 'textContent': 'add_box',
                        },
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with google',
                        },

                    },
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelUsername': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'username',
                        'textContent': 'Username',
                    },
                    'inputUsername': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'username',
                        'required': 'true',
                        'placeholder': 'Enter Username',
                    }
                },
                item2:{
                    name: 'li',
                    class: 'full-width item column',
                    'labelPassword': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'password',
                        'textContent': 'Password',
                    },
                    'inputPassword': {
                        'name': 'input',
                        'type': 'password',
                        'id': 'password',
                        'required': 'true',
                        'placeholder': 'Enter Password',
                    }
                },
                item3:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'LOG IN',
                        },
                    'data-command': `[{"command":"Login"}]`,
                    },
                },
                item4: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with email',
                        },

                    },
                },
                item5: {
                    name: 'li',
                    class: 'full-width item',
                    'textMessage': {
                        'name': 'div',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            class: 'small',
                            'textContent': 'By signing up, you agree to the Terms of Service and Privacy Policy.',
                        },

                    },
                },

            }

        }
    }
}
var headerSignup = {
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'textContent':"header",
    'brand': brand,
  //  'menu': actionSpaceHeaderVistorMenu,
}
var directoryJSON = {
    'li':{
    'name':'li',
    'span':{
        'name':'span',
        'class':'parent',
        "textContent":'', //inner Text will be included
    },
    'list':{
        'name':'ul',
        'class':'nested',
        'id':'' //id - Unique ID with which directory handle of this folder can ke retrieved from indexDB
    }
    }
}
var fileJSON = {
    'name':'li',
    'id':'', //id - Unique ID with which file handle of this file retrieved from indexDB
    //'class':'file'//used for opening a file
     "textContent":'',
     //innerText - name of the file
     'data-command': `[{"command":"file"}]`,
}
var leftSideNavBar= {
    name: 'section',
    id: "navigationSection",
    class: "column",
    inside_navigationSection: {
        name: 'div', id: "inside_navigationSection",
        // sideBar_header: {
        //     name: 'div',
        //     id:'side_bar_header',
        //     class: "justify_SpaceBetween container",
        //     brand: {
        //         name: 'div',
        //         class: "brand_logo",
        //         textContent: 'Sunil Kumar',
        //             },
        //     sideBarControlMenu: {
        //         name: 'div',
        //         class: "HeaderControl align_center justify_center",
        //         button1: {
        //             name: 'button',class: "mode_toggle_btn mr-15", id: "MainHeaderHamburger1",
        //                 },
        //         button2: {
        //             name: 'i','class': "material-icons",'textContent': 'add_box',
        //                 },
        //     },

        // },
        sideBar_CollectionList: {
            name: 'div',
             //   class: 'collection_list',
                    collectionItem: {
                name: 'div',
                   // class: "collection",
                        items: [
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'add',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'new actionStory',
                                    'onclick': "engine.executeSynReq(newActionStoryReq);"

                                  //  'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'upload_file',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'open file',
                                    'onclick': "engine.executeSynReq(openFileReqModel,event);"

                                    //  'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'folder_open',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'add collection',
                                    //'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                                    'onclick': "engine.executeSynReq(openFolderReqModel,event);"
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'save',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'save',
                                },
                                'data-command': `[{"command":"FS_Save"}]`,
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'Send Data to Sheet',
                                    'data-command': `[{"command":"invoice"}]`,
                                },
                               
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'Get Data from Sheet',
                                    'data-command': `[{"command":"namedRange"}]`,
                                },
                                
                            },

                        ]
            }
        },
        hr: {
            name: 'div',
                class: 'hr',
                },

        sideBar_Collection_withDropDown: {
            name: 'div',
                class: 'collection_list',
                    collectionTitle: {
                        name: 'div',
                        class: "medium",
                        textContent: "actionStories & Collections",
                    },
            collectionItem: {
                name: 'div',
                class: "container column",
            //     <li><span class="parent collection">my collection</span>
            //     <ul class="nested" id = "workspace">
                
            //    </ul>
            //    </li>
                        innerHTML: `
                      <li class='row item justify_SpaceBetween'><span class="parent ">my collection</span>
                      <ul class="nested container column">
                      <li class='item row'>story 1</li>
                    <li class='item row'>story 2</li>
                    <li class='item row' >story 3</li>
                    <li class='item row'>story 4</li>
                    <li class='item row' >
                        <li class='item row'><span class="parent">my Nested Stories</span>
                            <ul class="nested">
                                <li class='item row'>story 1</li>
                                <li class='item row'>story 2</li>
                                <li class='item row'>story 3</li>
                                <li class='item row'>story 4</li>
                            </ul>
                        </li>
                        errands
                    </li>

                    <li><span class="parent">recent Stories</span>
                        <ul class="nested">
                            <li>leaf</li>
                            <li>leaf</li>

                        </ul>
                    </li>
                </ul>
            </li>
            <span class="hozintalLine"></span>
            <li><span class="parent">Recent Files</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>
            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>
                </ul>
            </li>
            </ul>
            </li>
            <span class="hozintalLine"></span>
            <li><span class="parent">Starred</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>
            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>
                </ul>
            </li>
            </ul>
            </li>
            <li><span class="parent">Tags</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>
            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>
                </ul>
            </li>
            </ul>
            </li>
            <li><span class="parent">Trash</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>
            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>
                </ul>
            </li>
            </ul>
            </li>`
            }
        },
        sideBar_footer: {
            name: 'div',
                id: "SidebarFooter",
                   
            // footerIcons: {
            //     name: 'div',
            //     class: 'container IconList ',
            //     id:'footerIcons',
            //     itemCollection: {
            //         name: 'ul',
            //         class:'justify_SpaceBetween container',
            //         favouriteIcon: {
            //             name: 'i',
            //             'class': "material-icons",
            //             'textContent': 'favorite',
            //         }, 
            //         download:{
            //             name: 'i',
            //             'class': "material-icons",
            //             'textContent': 'download_for_offline',
            //         },
            //         setting: {
            //             name: 'i',
            //             'class': "material-icons",
            //             'textContent': 'settings',
            //         },
            //     }


            // },

        },

    }
}
var workspaceHeader= {
    name: 'div',
    class: "align_center row",
    id:'workspaceHeader',
    MainHeaderHamburger: {
        name: 'div',
        class: "mode_toggle_btn mr-15",
        style: "background-color: #333;",
        id: "MainHeaderHamburger2"
    },
    pageNavigate: {
        name: 'div',
        class: "flex align_center",
        back: {
            name: 'i',
            'class': "material-icons",
            'textContent': 'navigate_before',
        },
        next: {
            name: 'i',
            'class': "material-icons",
            'textContent': 'navigate_next',
        },
    },
    workSpaceTitle: {
        name: 'div',
        class: "title_edit flex align_center",
        title: {
            name: 'div',
            class: 'title',
            textContent: 'WorkSpaceTitle',
        },

    },
     'vl':{
        'name': 'span',
        class: 'verticleBar',                           
        },
    tools: {
        name: 'div',
        class:'row',
        selectTextClass:{
            name:'select',
            class:'select',
            id:'richTextFormattingSelection',
            options:{
                name:'option',
                selected:'',
                textContent:'normal',
            },
            option1:{
                name:'option',
                value:'h1',
                textContent:'Title 1',
            },
            option2:{
                name:'option',
                value:'h2',
                textContent:'Title 2',
            },
            option3:{
                name:'option',
                value:'h3',
                textContent:'Title 3',
            },
        },
        selectTextFont:{
            name:'select',
            class:'select',
            id:'richTextFontSelection',
            options:{
                name:'option',
                selected:'',
                textContent:'normal',
            },
            option1:{
                name:'option',
                
                textContent:'Arial',
            },
            option2:{
                name:'option',
                value:'h2',
                textContent:'Poppins',
            },
            option3:{
                name:'option',
                value:'h3',
                textContent:'Title 3',
            },
        },
        selectFontSize:{
            name:'select',
            class:'select',
            id:'richTextFontSizeSelection',
            options:{
                name:'option',
                selected:'',
                textContent:'normal',
            },
            option1:{
                name:'option',
                value:'1',
                textContent:'Very Small',
            },
            option2:{
                name:'option',
                value:'2',
                textContent:'A bit small',
            },
            option3:{
                name:'option',
                value:'h3',
                textContent:'Title 3',
            },
        },
        share: {
            name: "div",
            class: "share icon",
            icon: {
                name: 'i',
                'class': "material-icons",
                'textContent': 'share',
            },
        },
        heart: {
            name: "div",
            class: "heart icon",
            icon: {
                name: 'i',
                'class': "material-icons",
                'textContent': 'favorite',
            },

        },
        delete: {
            name: "div", class: "delete icon",
            icon: {
                name: 'i', 'class': "material-icons", 'textContent': 'delete',
            },

        },
        insertTitle: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'title',
            },
        },
        icon2: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'image',
            },
        },
        icon3: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'format_list_bulleted',
            },
        },
        icon4: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'attachment',
            },
        },
        icon5: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'format_quote',
            },
        },
        icon6: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'code',
            },
        },
        icon7: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'horizontal_rule',
            },
        },

        icon8: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'grid_on',
            },
        },



    }
}
var workSpaceBody = {
    name: 'div',
    id: 'workSpaceBody',
    class: 'container',
    userView: {
        name: 'div',
        class: 'container col',
        id:'userView',
        editor: {
            name: 'div',
            class: 'container column',
            id: 'editor',
            card: {
                name: 'div',
                class: 'card container column',
                id: 'autoSuggest',
                //    style: 'visibility:hidden',
                CardHeader: {
                    name: 'div',
                    class: 'medium',
                    textContent: 'Auto Suggest curated for you'
                },
                itemCollection: {
                    name: 'datalist',
                    class: 'container column',
                    items: {
                        name: 'div',
                        class: 'item',
                        textContent: 'I am an item',
                    },
                    items2: {
                        name: 'div',
                        class: 'item',
                        textContent: 'I am second Item',
                    },
                    

                }


            },
            // tabs: {
            //     name: 'div',
            //     class: 'container',
            //     id: 'storyTabs',
            //     items: {
            //         file1: {
            //             name: 'button',
            //             textContent: 'file1',
            //             close: {
            //                 name: 'i',
            //                 class: "material-icons",
            //                 id: 'close',
            //                 textContent: 'close',
            //             },

            //         },
            //         file2: {
            //             name: 'button',
            //             textContent: 'file2',
            //             close: {
            //                 name: 'i',
            //                 class: "material-icons",
            //                 id: 'close',
            //                 textContent: 'close',
            //             },

            //         },
            //         file3: {
            //             name: 'button',
            //             textContent: 'file3',
            //             close: {
            //                 name: 'i',
            //                 class: "material-icons",
            //                 id: 'close',
            //                 textContent: 'close',
            //             },

            //         },
            //     }


            // },
            content: {
                name: 'div',
                class: 'container column',
                id: 'content',
                contentEditable: 'true',
            
                activeActionStory: {
                    name: 'div',
                    class: 'container column',
                    id: 'activeActionStory',
                    block: {
                        name: 'div',
                        class: 'blocks',
                        id:'blocks+Index',
                        li: {
                            name: 'span',
                            class: 'inlineContent',
                            id:'inlineContent',
                            innerHTML: sampleIntroStory
                        }
                    }
                    
                }
                
            }
        },
        output: {
            name: 'div',
            class: 'container',
            id:'output',
            textContent:'output',
            
        }
    },
    
    
    
    
}
var actionWorkSpace = {
    name: 'section',
    id: "actionWorkspaceSection",
    class: "column",
    'workspaceHeader': workspaceHeader,
    'workSpaceBody': workSpaceBody,
   
  
   
}
var actionSpaceBody = {
    name: 'div',
    class: 'container row',
    id: 'actionSpaceBody',
    sidebarSection: leftSideNavBar,
    workSpaceSection: actionWorkSpace,
}
var footer= {
    name: 'div',
    class: 'workspaceFooter',
    p: {
        name: 'p',
        textContent: 'https://www.0dot1.live',
    }
}
var card = {
    name: 'div',
    class: 'card container',
    style:'visibility:hidden',
    CardHeader: {
        name: 'div',
        class: 'h2',
        textContent: 'Auto Suggest curated for you'
    },
    itemCollection: {
        name: 'span',
        class: 'container coloumn',
              
        items: {
            name: 'div',
            class: 'item',
            textContent:'I am an item',
            
        }

    }
    
    
}
var invoiceJSON = {
    'content':{
        'name':'div',
        'class':'modal-content',
    'invoice':{
        'name':'div',
        'class':'invoice',
    'header':{
        'name':'header',
        'h1':{
            'name':'h1',
            'textContent':'Invoice'
        },
        'address':{
            'name':'address',
            'contenteditable':'',
            'Name':{
                'name':'p',
                'textContent':'Geeta Baweja'
            }, 
            'Place':{
                'name':'p',
                'innerHTML':'Connaught Place, Delhi<br> India',
            },
            'pincode':{
                'name':'p',
                'textContent':'110001'
            },
        },
    },
    'article':{
        'name':'article',
            'h1':{
             'name':'h1',
             'textContent':'Recipient',
            },
            'address':{
            'name':'address',
            'contenteditable':'',
                'p':{
                    'name':'p',
                    'innerHTML':'Flat,House No.,Building,Company<br>Colony,Street,Sector<br>Town/City, State<br>Pincode',
                }
            },
            'meta':{
                'name':'table',
                'class':'meta',
                'tr1':{
                    'th':{
                        'name':'th',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Due Date'
                        }
                    },
                    'td':{
                        'name':'td',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'9th April 2021'
                        }
                    }
                },
                'tr3':{
                    'th':{
                        'name':'th',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'id':'DocNumber',
                            'textContent':'Doc Number'
                        }
                    },
                    'td':{
                        'name':'td',
                        'span':{
                            'name':'span',
                            'id':'DocNumber',
                             'contenteditable':'',
                            'textContent':''
                        }
                    }
                },
                'tr4':{
                    'th':{
                        'name':'th',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Status'
                        }
                    },
                    'td':{
                        'name':'td',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Payable'
                        }
                    }
                },
            },
            'inventory':{
                'name':'table',
                'class':'inventory',
                'thead':{
                    'name':'thead',
                    'tr':{
                        'name':'tr',
                        'th1':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Description',
                            } 
                        },
                        'th2':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Amount',
                            } 
                        },
                        'th3':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Detail Type',
                            } 
                        },
                        'th4':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Ref',
                            } 
                        },
                        'th5':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Account',
                            } 
                        },
                        'th6':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Line Status',
                            } 
                        },
                    }
                },
                'tbody':{
                    'name':'tbody',
                    'id':'tbody',
                    'trCustom':{
                        'name':'tr',
                        'id':'trCustom',
                        'td1':{
                            'name':'td',
                            'a':{
                                'name':'a',
                                'id':'Custom',
                                'class':'cut',
                                'textContent':'-',
                                'data-command': `[{"command":"RemoveItem"}]`,
                            },
                            'span':{
                                'name':'span',
                                'class':'Description',
                                'contenteditable':'',
                                'textContent':'Sample Expense'
                            }
                        },
                        'td2':{
                            'name':'td',
                            'span1':{
                                'name':'span',
                                'data-prefix':'',
                                'textContent':'Rs. '
                            },
                            'span2':{
                                'name':'span',
                                'class':'Amount',
                                'contenteditable':'',
                                'textContent':'600.00'
                            }
                        },
                        'td3':{
                            'name':'td',
                            'span2':{
                                'name':'span',
                                'class':'DetailType',
                                'contenteditable':'',
                                'textContent':'Expense Detail'
                            }
                        },
                        'td4':{
                            'name':'td',
                            'span2':{
                                'name':'span',
                                'class':'Ref',
                                'contenteditable':'',
                                'textContent':'DEF234'
                            }
                        },
                        'td5':{
                            'name':'td',
                            'span':{
                                'name':'span',
                                'class':'Account',
                                'contenteditable':'',
                                'textContent':'EFG345'
                            }
                        },
                        'td6':{
                            'name':'td',
                            'span2':{
                                'name':'span',
                                'class':'LineStatus',
                                'contenteditable':'',
                                'textContent':'Billable'
                            }
                        }
                    }
                }
            },
            'add':{
                'name':'a',
                'class':'add',
                'textContent':'+',
                'data-command': `[{"command":"NewItem"}]`,
            },
            // 'balance':{
            //     'name':'table',
            //     'class':'balance',
            //     'tr1':{
            //         'name':'tr',
            //         'th':{
            //             'name':'th',
            //             'span':{
            //                 'name':'span',
            //                 'contenteditable':'',
            //                 'textContent':'Total Amount'
            //             }
            //         },
            //         'td':{
            //             'name':'td',
            //             'span1':{
            //                 'name':'span',
            //                 'data-prefix':'',
            //                 'textContent':'Rs. '
            //             },
            //             'span2':{
            //                 'name':'span',
            //                 'id':'TotalAmount',
            //                 'textContent':'600.00'
            //             }
            //         }
            //     },
            // },
           
        },
        'submit':{
            'name':'button',
            'full-width':'',
            'textContent':"Submit Invoice",
            'data-command': `[{"command":"SubmitInvoice"}]`,
        }
    }
    }
}
var newItemJSON ={
        'name':'tr',
        'id':'',
        'td1':{
            'name':'td',
            'a':{
                'name':'a',
                'class':'cut',
                'textContent':'-',
                'data-command': `[{"command":"RemoveItem"}]`,
            },
            'span':{
                'name':'span',
                'class':'Description',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td2':{
            'name':'td',
            'span1':{
                'name':'span',
                'data-prefix':'',
                'textContent':'Rs. '
            },
            'span2':{
                'name':'span',
                'class':'Amount',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td3':{
            'name':'td',
            'span2':{
                'name':'span',
                'class':'DetailType',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td4':{
            'name':'td',
            'span2':{
                'name':'span',
                'class':'Ref',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td5':{
            'name':'td',
            'span':{
                'name':'span',
                'class':'Account',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td6':{
            'name':'td',
            'span2':{
                'name':'span',
                'class':'LineStatus',
                'contenteditable':'',
                'textContent':''
            }
        }
}