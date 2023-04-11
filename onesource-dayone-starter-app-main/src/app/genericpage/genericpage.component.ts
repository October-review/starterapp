import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genericpage',
  templateUrl: './genericpage.component.html',
  styleUrls: ['./genericpage.component.scss']
})
export class GenericpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToTaskPage(){}

  @Input()
  quicklinks: any = [
    {
      name: "Quicklink",
      url: "",
    },
    {
      name: "Quicklink 2",
      url: "",
    },
    {
      name: "Link 3",
      url: "",
    },

  ];

  @Input()
  pages: any = [
    {
      name: "PAGE WITH DROPDOWN",
      url: "",
      subpages: [
        {
          name: "Page with sub sections",
          url: "",
          subpages: [
            {
              name: "Sub page",
              url: "",
            },
            {
              name: "Sub page",
              url: "",
            },
            {
              name: "Sub page",
              url: "",
            },
          ],
        },
        {
          name: "Page with sub sections",
          url: "",
          subpages: [
            {
              name: "Sub page",
              url: "",
            },
            {
              name: "Sub page",
              url: "",
            },
            {
              name: "Sub page",
              url: "",
            },
          ],
        },
        {
          name: "Page with no sub sections",
          url: "",
        },
        {
          name: "Page with no sub sections",
          url: "",
        },
        {
          name: "Page with sub sections",
          url: "",
          subpages: [
            {
              name: "Sub page",
              url: "",
            },
            {
              name: "Sub page",
              url: "",
            },
            {
              name: "Sub page",
              url: "",
            },
          ],
        },
      ]
    },
    {
      name: "Page",
      url: "",
    },
    {
      name: "Page",
      url: "",
    },

  ];

}
