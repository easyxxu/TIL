import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for(int tc = 1; tc <= T; tc++) {
            int N = sc.nextInt();
            int[][] rect = new int[N][N];

            System.out.println("#"+tc);

            for(int i = 0; i < N; i++) {
                for(int j = 0; j <= i; j++) {
                    if(j == 0 || j == i){
                        rect[i][j] = 1;
                    } else {
                        rect[i][j] = rect[i-1][j-1] + rect[i-1][j];
                    }
                }
            }
            
            for(int i=0;i<N;i++){
                for(int j=0;j<=i;j++){
                    System.out.printf("%d ",rect[i][j]);
                }
                System.out.println();
            }
        }
    }
}
